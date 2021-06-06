import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header/header.module';
import { MenuModule } from '../template/menu/menu.module';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './footer/footer.component';

import { LoadingComponent } from './loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOnceDirective } from '../../directives/click-once-directive';
import { DebounceClickDirective } from '../../directives/debounce-click-directive';
import { StrictNumberOnlyDirective } from '../../directives/strict-number-only-directive';

@NgModule({
  declarations: [
    TemplateComponent,
    FooterComponent,
    LoadingComponent,
    ClickOnceDirective,
    StrictNumberOnlyDirective,
    DebounceClickDirective,
  ],
  imports: [CommonModule, FlexLayoutModule, MenuModule, HeaderModule, NgbModule],
  exports: [
    TemplateComponent,
    LoadingComponent,
    ClickOnceDirective,
    StrictNumberOnlyDirective,
    DebounceClickDirective,
  ],
})
export class TemplateModule {}
