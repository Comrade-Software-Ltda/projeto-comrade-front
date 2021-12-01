import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class StrictNumberOnlyDirective {
  private regex: RegExp = new RegExp('^[0-9]*$');

  private specialKeys: Array<string> = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const pattern = /[0-9]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }

    return;
  }

  @HostListener('focus', ['$event']) focus(event: KeyboardEvent) {
    return;
  }

  @HostListener('blur', ['$event']) blur(event: KeyboardEvent) {
    return;
  }

  @HostListener('paste', ['$event']) onPaste(event: any) {
    const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
    if (clipboardData) {
      const regEx = new RegExp('^[0-9]*$');
      if (!regEx.test(clipboardData)) {
        event.preventDefault();
      }
    }
    return;
  }
}
