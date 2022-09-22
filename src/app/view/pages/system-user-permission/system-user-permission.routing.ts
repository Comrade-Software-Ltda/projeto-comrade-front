import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemUserPermissionComponent } from './system-user-permission.component';

const routes: Routes = [
  {
    path: '',
    component: SystemUserPermissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemUserPermissionRoutingModule {}
