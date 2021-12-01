import { Directive, ElementRef, HostListener } from '@angular/core';

const DISABLE_TIME = 2000;

@Directive({
  selector: '[appButtonSubmit]',
})
export class DebounceClickDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('click', ['$event'])
  clickEvent() {
    this.elementRef.nativeElement.setAttribute('disabled', 'true');
    setTimeout(() => this.elementRef.nativeElement.removeAttribute('disabled'), DISABLE_TIME);
  }
}
