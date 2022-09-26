import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() cssModal? = '';
  @Input() hasCloseIcon = true;
  @Input() title = '';
  @Input() className = '';

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
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

    /*this.element.className = 'closed';*/

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
        // modal.close(); //Close modal
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
    
    /*this.element.className = 'open';*/
    document.body.classList.add('modal-open');
  }

  // close modal
  close(): void {
    /*this.element.className = 'closed';*/
    document.body.classList.remove('modal-open');
  }
  saved(): void {
  

alert("sucesso");

    document.body.classList.remove('modal-open');
  }
}
