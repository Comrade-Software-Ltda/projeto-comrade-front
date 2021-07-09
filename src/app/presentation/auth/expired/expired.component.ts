import { Component, HostBinding, Input, OnInit, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdatePasswordUsecase } from 'src/app/core/usecases/authentication/update-password.usecase';
import { AuthenticationModel } from 'src/app/core/domain/authentication.model';
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
  key = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private updatePassword: UpdatePasswordUsecase
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.key = this.router.getCurrentNavigation()?.extras.state?.key;
    }
  }

  ngOnInit() {
    if (this.key === '') {
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
    this.toastService.showStandard(message);
  }

  public startForm() {
    this.registerForm = this.fb.group(
      {
        password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
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
      this.toastService.showStandard('As passwords não sao iguais, por favor digite novamente');
      return;
    } else if (this.registerForm.invalid) {
      this.isLoading = false;
      this.toastService.showStandard('Caracteres insuficientes');
      return;
    }
    this.save();
  };

  loginValidator: any = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmeSenha = control.get('confirmeSenha');
    if (password && confirmeSenha) {
      return password.value !== confirmeSenha.value ? { verificarSenha: true } : null;
    }
    return null;
  };

  async save() {
    const data: AuthenticationModel = {
      key: this.key,
      password: this.registerForm.value.password,
    };

    this.updatePassword.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.code && x.code === 200) {
          this.toastService.showStandard('Sua password foi alterada com success.');
          this.router.navigate(['auth']);
        } else if (x.code && (x.code === 400 || 404)) {
          this.toastService.showStandard('Erro na validação. Por favor tente novamente.');
        } else {
          this.toastService.showStandard(
            'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.'
          );
        }
      },
      (e) => {
        this.isLoading = false;
        this.toastService.showStandard(
          'Aconteceu um imprevisto, tente novamente. Se o erro persistir contate o suporte.'
        );
      }
    );
  }
}
