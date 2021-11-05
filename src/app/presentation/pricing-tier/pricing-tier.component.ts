import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pricing-tier',
  templateUrl: './pricing-tier.component.html',
  styleUrls: ['./pricing-tier.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PricingTierComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  public loading = false;
  layout = 'full';
  textoBreadcrumb = [{ title: 'Início', link: '' }];

  constructor(private router: Router) {}
  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
