import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';

@NgModule({
  declarations: [MenuCollapseComponent, MenuFullComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [MenuCollapseComponent, MenuFullComponent],
})
export class MenuModule {}
