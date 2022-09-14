import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirplaneComponent } from './airplane.component';

const routes: Routes = [
  {
    path: '',
    component: AirplaneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirplaneRoutingModule {}
