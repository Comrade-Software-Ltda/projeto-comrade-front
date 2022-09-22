import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemUserRoleComponent } from './system-user-role.component';

const routes: Routes = [
  {
    path: '',
    component: SystemUserRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemUserRoleRoutingModule {}
