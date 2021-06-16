import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';
import { PostEsquecerSenhaUsecase } from 'src/app/core/usecases/autenticacao/post-esquecer-senha.usecases';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;
  public registerForm!: FormGroup;
  chave = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private postEsquecerSenha: PostEsquecerSenhaUsecase
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.chave = this.router.getCurrentNavigation()?.extras.state?.chave;
    }
  }

  ngOnInit() {
    this.startForm();
  }

  showtoastService(message: string) {
    this.toastService.show('');
  }

  public startForm() {
    this.registerForm = this.fb.group({
      chave: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.isLoading = true;
    if (this.registerForm.invalid) {
      this.toastService.show('Usuario incorreto, por favor digite novamente', {
        delay: 3000,
        autohide: true,
      });
      return;
    }
    this.save();
  };

  async save() {
    const data: AutenticacaoModel = {
      chave: this.registerForm.value.chave,
      senha: this.registerForm.value.senha,
    };

    this.postEsquecerSenha.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.codigo && x.codigo === 200) {
          this.toastService.show('Sua pedido foi atendido.', {
            delay: 3000,
            autohide: true,
          });
        } else if (x.codigo && x.codigo === 1001) {
          this.toastService.show('Usuario invalido, por favor digite novamente.', {
            delay: 3000,
            autohide: true,
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
