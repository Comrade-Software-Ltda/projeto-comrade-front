import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotComponent } from './forgot.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, ReactiveFormsModule],
  declarations: [ForgotComponent],
})
export class ForgotModule {}
