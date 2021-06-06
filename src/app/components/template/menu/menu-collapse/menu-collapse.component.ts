import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/core/utils/menu.model';

@Component({
  selector: 'app-menu-collapse',
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuCollapseComponent implements OnInit {
  menus!: MenuModel[];
  constructor(private router: Router) {}

  public parametroCollapsed = true;
  public manualLojaCollapsed = true;
  public checkListCollapsed = true;
  public gestaoPessoasCollapsed = true;

  @Output() notify: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit() {}

  redirecionaHome() {
    this.router.navigate(['/home']);
  }

  getStyles() {
    return {};
  }
}
