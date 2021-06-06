import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TemplateModule } from '../../components/template/template.module';
import { NavModule } from 'src/app/components/nav/nav.module';
import { ScreenModalModule } from '../../components/screen-modal/screen-modal.module';
@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    TemplateModule,
    NavModule,
    ScreenModalModule,
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
