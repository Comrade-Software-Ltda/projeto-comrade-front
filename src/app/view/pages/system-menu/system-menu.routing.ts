import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemMenuComponent } from './system-menu.component';

const routes: Routes = [
  {
    path: '',
    component: SystemMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemMenuRoutingModule {}
