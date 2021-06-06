import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';
import { PostEsquecerSenhaUsecase } from 'src/app/core/usecases/autenticacao/post-esquecer-senha.usecases';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
    private postEsquecerSenha: PostEsquecerSenhaUsecase
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.chave = this.router.getCurrentNavigation()?.extras.state?.chave;
    }
  }

  ngOnInit() {
    this.startForm();
  }

  openSnackBar(message: string) {
    this.snackBar.open('');
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
      this.snackBar.open('Usuario incorreto, por favor digite novamente', 'Link', {
        duration: 3000,
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
          this.snackBar.open('Sua pedido foi atendido.', 'Link', {
            duration: 3000,
          });
        } else if (x.codigo && x.codigo === 1001) {
          this.snackBar.open('Usuario invalido, por favor digite novamente.', 'Link', {
            duration: 3000,
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
