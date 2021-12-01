import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { throwIfAlreadyLoaded } from 'src/app/guards/module-import.guard';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task.routing';

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
