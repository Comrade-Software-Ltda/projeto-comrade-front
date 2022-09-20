import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleSystemUserComponent } from './role-system-user.component';

const routes: Routes = [
  {
    path: '',
    component: RoleSystemUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
