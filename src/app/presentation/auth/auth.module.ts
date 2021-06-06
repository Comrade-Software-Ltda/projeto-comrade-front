import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ForgotModule } from './forgot/forgot.module';
import { ExpiredModule } from './expired/expired.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ForgotModule,
    ExpiredModule,
    AuthRoutingModule
  ],
  declarations: [],
})
export class AuthModule {}
