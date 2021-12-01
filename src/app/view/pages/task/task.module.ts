import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, TaskRoutingModule],
  exports: [],
  declarations: [TaskComponent],
  providers: [],
})
export class TaskModule {
  constructor(@Optional() @SkipSelf() parentModule: TaskModule) {
    throwIfAlreadyLoaded(parentModule, 'TaskModule');
  }
}
