import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PricingTierComponent } from './pricing-tier.component';

const routes: Routes = [
  {
    path: '',
    component: PricingTierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricingTierRoutingModule {}
