import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenModalComponent } from './screen-modal.component';
import { ScreenModalService } from './screen-modal.service';

@NgModule({
  declarations: [ScreenModalComponent],
  imports: [CommonModule],
  providers: [ScreenModalService],
  exports: [ScreenModalComponent],
})
export class ScreenModalModule {}
