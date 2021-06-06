import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FlexLayoutModule, MenuModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
