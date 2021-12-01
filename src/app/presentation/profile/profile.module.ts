import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { throwIfAlreadyLoaded } from 'src/app/guards/module-import.guard';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, ProfileRoutingModule],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {
  constructor(@Optional() @SkipSelf() parentModule: ProfileModule) {
    throwIfAlreadyLoaded(parentModule, 'ProfileModule');
  }
}
