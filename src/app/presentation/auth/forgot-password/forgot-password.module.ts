import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, ReactiveFormsModule],
  declarations: [ForgotPasswordComponent],
})
export class ForgotPasswordModule {}
