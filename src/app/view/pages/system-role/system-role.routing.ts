import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemRoleComponent } from './system-role.component';

const routes: Routes = [
  {
    path: '',
    component: SystemRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoleRoutingModule {}
