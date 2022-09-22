import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxDataGridModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTreeListModule,
} from 'devextreme-angular';
import { SystemMenuRoutingModule } from './system-menu.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemMenuComponent } from './system-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTreeListModule,
    DxFormModule,
    DxTextBoxModule,
    SystemMenuRoutingModule,
  ],
  exports: [],
  declarations: [SystemMenuComponent],
  providers: [],
})
export class SystemMenuModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemMenuModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemMenuModule');
  }
}
