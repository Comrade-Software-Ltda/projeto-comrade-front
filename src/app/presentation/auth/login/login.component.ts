import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostLoginUsecase } from '../../../core/usecases/token/post-login.usecase';
import { AutenticacaoModel } from '../../../core/domain/autenticacao.model';

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
    private postLogin: PostLoginUsecase,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.verificarToken();
    this.startForm();
  }

  openSnackBar(message: string) {
    this.snackBar.open('');
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
      this.snackBar.open('Usuario ou senha invalida', 'Link', {
        duration: 3000,
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
          this.snackBar.open('Usuario ou senha invalida', 'Link', {
            duration: 3000,
          });
        } else if (x.codigo && x.codigo === 1002) {
          this.snackBar.open('Senha expirada, por favor entre uma nova senha.', 'Link', {
            duration: 3000,
          });
          this.router.navigate(['auth/expired-password'], {
            state: { chave: this.registerForm.value.chave },
          });
        } else if (x.codigo && (x.codigo === 400 || 404)) {
          this.snackBar.open('Erro na validação. Por favor tente novamente.', 'Link', {
            duration: 3000,
          });
        } else {
          this.snackBar.open(
            'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.',
            'Link',
            {
              duration: 3000,
            }
          );
        }
      },
      (e) => {
        this.isLoading = false;
        this.snackBar.open(
          'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.',
          'Link',
          {
            duration: 3000,
          }
        );
      }
    );
  }
}
