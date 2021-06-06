import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NavRoutingModule } from './nav.routing';
import { NavComponent } from './nav.component';
import { AirplaneTableComponent } from '../../presentation/airplane/airplane-table/airplane-table.component';
import { AirplaneEditComponent } from '../../presentation/airplane/airplane-edit/airplane-edit.component';
import { ScreenModalModule } from '../screen-modal/screen-modal.module';
import { UsuarioSistemaTableComponent } from '../usuarioSistema/usuario-sistema-table/usuario-sistema-table.component';

@NgModule({
  imports: [
    NavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    TemplateModule,
    NgbNavModule,
    ScreenModalModule,
    NgbPaginationModule,
  ],
  exports: [NavComponent],
  declarations: [
    NavComponent,
    AirplaneTableComponent,
    AirplaneEditComponent,
    UsuarioSistemaTableComponent,
  ],
})
export class NavModule {}
