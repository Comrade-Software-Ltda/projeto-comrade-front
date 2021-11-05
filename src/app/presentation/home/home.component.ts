import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
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
