import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { AirplaneRoutingModule } from './airplane.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { AirplaneComponent } from './airplane.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, AirplaneRoutingModule],
  exports: [],
  declarations: [AirplaneComponent],
  providers: [],
})
export class AirplaneModule {
  constructor(@Optional() @SkipSelf() parentModule: AirplaneModule) {
    throwIfAlreadyLoaded(parentModule, 'AirplaneModule');
  }
}
