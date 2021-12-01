import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { throwIfAlreadyLoaded } from 'src/app/guards/module-import.guard';

@NgModule({
  imports: [HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
  constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
    throwIfAlreadyLoaded(parentModule, 'HomeModule');
  }
}
