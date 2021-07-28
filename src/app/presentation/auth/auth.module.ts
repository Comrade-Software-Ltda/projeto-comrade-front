import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ExpiredPasswordModule } from './expired-password/expired-password.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ForgotPasswordModule,
    ExpiredPasswordModule,
    AuthRoutingModule,
  ],
  declarations: [],
})
export class AuthModule {}
