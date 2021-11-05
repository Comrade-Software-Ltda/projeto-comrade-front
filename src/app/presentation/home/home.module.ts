import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ScreenModalModule } from '../../components/screen-modal/screen-modal.module';
import { TemplateModule } from 'src/app/components/template/template.module';
@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    ScreenModalModule,
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [TemplateModule],
})
export class HomeModule {}
