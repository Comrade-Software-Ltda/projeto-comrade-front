import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpiredComponent } from './expired.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, ReactiveFormsModule],
  declarations: [ExpiredComponent],
})
export class ExpiredModule {}
