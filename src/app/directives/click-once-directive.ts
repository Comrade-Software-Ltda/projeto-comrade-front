import { HostBinding } from '@angular/core';
import { Directive, HostListener, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { asyncScheduler, scheduled, Subject, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[appClickOnce]',
})
export class ClickOnceDirective implements OnInit, OnDestroy {
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription: Subscription;

  @HostBinding() disabled = false;

  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe().subscribe((e) => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) clickEvent(event: any) {
    this.clicks.next(event);
    this.disabled = true;
    scheduled([true], asyncScheduler)
      .pipe(delay(2000))
      .subscribe(() => (this.disabled = false));
  }
}
