import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxDataGridModule,
  DxFormModule,
  DxTextBoxModule,
  DxFileUploaderModule,
  DxButtonModule,
  DxDateBoxModule,
  DxSelectBoxModule,
  DxGalleryModule,
} from 'devextreme-angular';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';

@NgModule({
  imports: [
    DxDataGridModule,
    DxFormModule,
    ProfileRoutingModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxGalleryModule,
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {
  constructor(@Optional() @SkipSelf() parentModule: ProfileModule) {
    throwIfAlreadyLoaded(parentModule, 'ProfileModule');
  }
}
