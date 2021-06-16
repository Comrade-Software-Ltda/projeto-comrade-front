import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostLoginUsecase } from '../../../core/usecases/token/post-login.usecase';
import { AutenticacaoModel } from '../../../core/domain/autenticacao.model';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;
  public registerForm!: FormGroup;
  chave = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private postLogin: PostLoginUsecase
  ) {}

  ngOnInit() {
    this.verificarToken();
    this.startForm();
  }

  showtoastService(message: string) {
    this.toastService.show('');
  }

  verificarToken() {
    var verificarToken = localStorage.getItem('kpmgPermissaoToken');
    if (verificarToken) {
      const token = JSON.parse(verificarToken);
      if (token != '') {
        this.router.navigate(['/home']);
      }
    }
  }

  public startForm() {
    this.registerForm = this.fb.group({
      chave: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      senha: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.isLoading = true;
    if (this.registerForm.invalid) {
      this.toastService.show('Usuario ou senha invalida', {
        delay: 3000,
        autohide: true,
      });
      this.isLoading = false;
      return;
    }
    this.save();
  };

  async save() {
    const data: AutenticacaoModel = {
      chave: this.registerForm.value.chave,
      senha: this.registerForm.value.senha,
    };
    this.postLogin.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.codigo && x.codigo === 200) {
          let kpmgToken = x.data?.token.replace(/"/g, '');
          localStorage.setItem('kpmgPermissaoToken', kpmgToken || '');
          this.router.navigate(['/home']);
        } else if (x.codigo && x.codigo === 1001) {
          this.toastService.show('Usuario ou senha invalida', {
            delay: 3000,
            autohide: true,
          });
        } else if (x.codigo && x.codigo === 1002) {
          this.toastService.show('Senha expirada, por favor entre uma nova senha.', {
            delay: 3000,
            autohide: true,
          });
          this.router.navigate(['auth/expired-password'], {
            state: { chave: this.registerForm.value.chave },
          });
        } else if (x.codigo && (x.codigo === 400 || 404)) {
          this.toastService.show('Erro na validação. Por favor tente novamente.', {
            delay: 3000,
            autohide: true,
          });
        } else {
          this.toastService.show(
            'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.',
            {
              delay: 3000,
              autohide: true,
            }
          );
        }
      },
      (e) => {
        this.isLoading = false;
        this.toastService.show(
          'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.',
          {
            delay: 3000,
            autohide: true,
          }
        );
      }
    );
  }
}
