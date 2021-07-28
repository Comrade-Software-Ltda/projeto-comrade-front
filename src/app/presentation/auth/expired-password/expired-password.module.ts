import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpiredPasswordComponent } from './expired-password.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, ReactiveFormsModule],
  declarations: [ExpiredPasswordComponent],
})
export class ExpiredPasswordModule {}
