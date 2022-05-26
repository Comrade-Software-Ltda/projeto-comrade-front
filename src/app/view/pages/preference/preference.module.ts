import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxSelectBoxModule, DxRangeSliderModule, DxButtonModule } from 'devextreme-angular';
import { PreferenceComponent } from './preference.component';
import { PreferenceRoutingModule } from './preference.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';

@NgModule({
  imports: [PreferenceRoutingModule, DxSelectBoxModule, DxRangeSliderModule, DxButtonModule],
  exports: [],
  declarations: [PreferenceComponent],
  providers: [],
})
export class PreferenceModule {
  constructor(@Optional() @SkipSelf() parentModule: PreferenceModule) {
    throwIfAlreadyLoaded(parentModule, 'PreferenceModule');
  }
}
