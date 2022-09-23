import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxTreeListModule,
  DxFormModule,
  DxTextBoxModule,
  DxLookupModule,
} from 'devextreme-angular';
import { SystemMenuRoutingModule } from './system-menu.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemMenuComponent } from './system-menu.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    DxTreeListModule,
    DxFormModule,
    DxTextBoxModule,
    SystemMenuRoutingModule,
    DxLookupModule,
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
