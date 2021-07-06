import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/core/domain/authentication.model';
import { ForgotPasswordUsecase } from 'src/app/core/usecases/authentication/forgot-password.usecase';
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
  key = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private forgotPassword: ForgotPasswordUsecase
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.key = this.router.getCurrentNavigation()?.extras.state?.key;
    }
  }

  ngOnInit() {
    this.startForm();
  }

  showtoastService(message: string) {
    this.toastService.showStandard(message);
  }

  public startForm() {
    this.registerForm = this.fb.group({
      key: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.isLoading = true;
    if (this.registerForm.invalid) {
      this.toastService.showStandard('Usuario incorreto, por favor digite novamente');
      return;
    }
    this.save();
  };

  async save() {
    const data: AuthenticationModel = {
      key: this.registerForm.value.key,
      password: this.registerForm.value.password,
    };

    this.forgotPassword.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.code && x.code === 200) {
          this.toastService.showStandard('Sua pedido foi atendido.');
        } else if (x.code && x.code === 1001) {
          this.toastService.showStandard('Usuario invalido, por favor digite novamente.');
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
