import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { ScreenModalService } from './screen-modal.service';

@Component({
  selector: 'app-screen-modal',
  template: ` <div class="screen-modal" data-target="#modal">
      <div class="screen-modal-body">
        <div class="screen-modal-header">
          <div class="float-left pt-1">
            <h6 class="font-weight-bold title">{{ title }}</h6>
          </div>
          <div *ngIf="hasCloseIcon" class="close">
            <a (click)="close()">X</a>
          </div>
        </div>
        <div class="screen-modal-bodycontent">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
    <div class="screen-modal-background"></div>`,
  styleUrls: ['./screen-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScreenModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() cssModal? = '';
  @Input() hasCloseIcon = true;
  @Input() title = 'Editar';

  private element: any;

  constructor(private modalService: ScreenModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    if (this.cssModal) {
      this.element.classList.add(this.cssModal);
    }

    this.element.style.display = 'none';
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'screen-modal') {
        modal.close(); //Close modal
        return;
      }
    });
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('screen-modal-open');
    document.addEventListener('keydown', this.closeModalOnEscapeKey);
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('screen-modal-open');
    document.removeEventListener('keydown', this.closeModalOnEscapeKey);
  }

  closeModalOnEscapeKey = (e: any) => {
    if (e.key == 'Escape') {
      this.close();
      return;
    }
  };
}
