import { Component, HostBinding, Input, OnInit, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostExpirarSenhaUsecase } from 'src/app/core/usecases/autenticacao/post-expirar-senha.usecase';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';

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
    private snackBar: MatSnackBar,
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

  openSnackBar(message: string) {
    this.snackBar.open('');
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
      this.snackBar.open('As senhas não sao iguais, por favor digite novamente', 'Link', {
        duration: 3000,
      });
      return;
    } else if (this.registerForm.invalid) {
      this.isLoading = false;
      this.snackBar.open('Caracteres insuficientes', 'Link', {
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
          this.snackBar.open('Sua senha foi alterada com sucesso.', 'Link', {
            duration: 3000,
          });
          this.router.navigate(['auth']);
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
