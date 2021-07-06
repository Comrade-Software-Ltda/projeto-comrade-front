import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateTokenUsecase } from '../../../core/usecases/token/generate-token.usecase';
import { AuthenticationModel } from '../../../core/domain/authentication.model';
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
  key = '';
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private generateToken: GenerateTokenUsecase
  ) {}

  ngOnInit() {
    this.verificarToken();
    this.startForm();
  }

  showtoastService(message: string) {
    this.toastService.showStandard(message);
  }

  verificarToken() {
    var verificarToken = localStorage.getItem('comradePermissaoToken');
    if (verificarToken) {
      const token = JSON.parse(verificarToken);
      if (token != '') {
        this.router.navigate(['/home']);
      }
    }
  }

  public startForm() {
    this.registerForm = this.fb.group({
      key: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.isLoading = true;
    if (this.registerForm.invalid) {
      this.toastService.showStandard('Usuario ou password invalida');
      this.isLoading = false;
      return;
    }
    this.save();
  };

  async save() {
    const data: AuthenticationModel = {
      key: this.registerForm.value.key,
      password: this.registerForm.value.password,
    };
    this.generateToken.execute(data).subscribe(
      (x) => {
        this.isLoading = false;
        if (x.code && x.code === 200) {
          let comradeToken = x.data?.token.replace(/"/g, '');
          localStorage.setItem('comradePermissaoToken', comradeToken || '');
          this.router.navigate(['/home']);
        } else if (x.code && x.code === 1001) {
          this.toastService.showStandard('Usuario ou password invalida');
        } else if (x.code && x.code === 1002) {
          this.toastService.showStandard('Senha expirada, por favor entre uma nova password.');
          this.router.navigate(['auth/expired-password'], {
            state: { key: this.registerForm.value.key },
          });
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
