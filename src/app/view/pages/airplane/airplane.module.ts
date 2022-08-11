import { ModalModule } from './../../components/modal/modal.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { AirplaneRoutingModule } from './airplane.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { AirplaneComponent } from './airplane.component';

@NgModule({
  imports: [
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    ModalModule,
    DxDataGridModule,
    DxFormModule,
    AirplaneRoutingModule,
  ],
  exports: [],
  declarations: [AirplaneComponent],
  providers: [],
})
export class AirplaneModule {
  constructor(@Optional() @SkipSelf() parentModule: AirplaneModule) {
    throwIfAlreadyLoaded(parentModule, 'AirplaneModule');
  }
}
