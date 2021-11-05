import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { PricingTierComponent } from './pricing-tier.component';
import { PricingTierRoutingModule } from './pricing-tier.routing';
import { ScreenModalModule } from '../../components/screen-modal/screen-modal.module';
import { throwIfAlreadyLoaded } from 'src/app/guards/module-import.guard';
import { ComponentsModule } from 'src/app/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    PricingTierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    ScreenModalModule,
  ],
  exports: [],
  declarations: [PricingTierComponent],
  providers: [],
})
export class PricingTierModule {
  constructor(@Optional() @SkipSelf() parentModule: PricingTierModule) {
    throwIfAlreadyLoaded(parentModule, 'PricingTierModule');
  }
}
