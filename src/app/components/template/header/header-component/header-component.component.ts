import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  @Input() nomeUsuario = '';
  cargo = '';

  listNotification = [];

  voltarPagina(rotaRedirect: string) {
    rotaRedirect ? this.router.navigate(['/' + rotaRedirect]) : this.location.back();
  }

  ngOnInit() {}

  logout() {
    // this.authService.logout();
  }
}
