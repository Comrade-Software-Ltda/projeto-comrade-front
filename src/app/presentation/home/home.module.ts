import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ScreenModalModule } from '../../components/screen-modal/screen-modal.module';
import { throwIfAlreadyLoaded } from 'src/app/guards/module-import.guard';
import { ComponentsModule } from 'src/app/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxButtonModule } from 'devextreme-angular';
@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    ScreenModalModule,
    DxButtonModule,
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
  constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
    throwIfAlreadyLoaded(parentModule, 'HomeModule');
  }
}
