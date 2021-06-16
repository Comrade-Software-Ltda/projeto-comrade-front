import { Component, HostBinding, Input, OnInit, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostExpirarSenhaUsecase } from 'src/app/core/usecases/autenticacao/post-expirar-senha.usecase';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.scss'],
})
export class ExpiredComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;
  public registerForm!: FormGroup;
  isSenha = true;
  isConfirmarSenha = true;
  chave = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private postExpirarSenha: PostExpirarSenhaUsecase
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.chave = this.router.getCurrentNavigation()?.extras.state?.chave;
    }
  }

  ngOnInit() {
    if (this.chave === '') {
      this.router.navigate(['auth']);
    }
    this.startForm();
  }

  mostrarSenha() {
    this.isSenha = !this.isSenha;
  }

  mostrarConfirmarSenha() {
    this.isConfirmarSenha = !this.isConfirmarSenha;
  }

  showtoastService(message: string) {
    this.toastService.show('');
  }

  public startForm() {
    this.registerForm = this.fb.group(
      {
        senha: ['', Validators.compose([Validators.minLength(4), Validators.required])],
        confirmeSenha: ['', Validators.required],
      },
      { validators: this.loginValidator }
    );
  }
  home() {
    this.router.navigate(['/']);
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.isLoading = true;
    if (this.registerForm.errors?.verificarSenha) {
      this.isLoading = false;
      this.toastService.show('As senhas não sao iguais, por favor digite novamente', {
        duration: 3000,
      });
      return;
    } else if (this.registerForm.invalid) {
      this.isLoading = false;
      this.toastService.show('Caracteres insuficientes', {
        duration: 3000,
      });
      return;
    }
    this.save();
  };

  loginValidator: any = (control: FormGroup): ValidationErrors | null => {
    const senha = control.get('senha');
    const confirmeSenha = control.get('confirmeSenha');
    if (senha && confirmeSenha) {
      return senha.value !== confirmeSenha.value ? { verificarSenha: true } : null;
    }
    return null;
  };

  async save() {
    const data: AutenticacaoModel = {
      chave: this.chave,
      senha: this.registerForm.value.senha,
    };

    this.postExpirarSenha.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.codigo && x.codigo === 200) {
          this.toastService.show('Sua senha foi alterada com sucesso.', {
            duration: 3000,
            autohide: true,
          });
          this.router.navigate(['auth']);
        } else if (x.codigo && (x.codigo === 400 || 404)) {
          this.toastService.show('Erro na validação. Por favor tente novamente.', {
            duration: 3000,
            autohide: true,
          });
        } else {
          this.toastService.show(
            'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.',
            {
              duration: 3000,
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
            duration: 3000,
            autohide: true,
          }
        );
      }
    );
  }
}
