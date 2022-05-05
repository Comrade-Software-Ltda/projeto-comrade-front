import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadRoutingModule } from './file-upload.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, FileUploadRoutingModule],
  exports: [],
  declarations: [FileUploadComponent],
  providers: [],
})
export class FileUploadModule {
  constructor(@Optional() @SkipSelf() parentModule: FileUploadModule) {
    throwIfAlreadyLoaded(parentModule, 'FileUploadModule');
  }
}
