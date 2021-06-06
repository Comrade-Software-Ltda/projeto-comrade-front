import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from '../../../../core/utils/menu.model';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuFullComponent implements OnInit {
  menus!: MenuModel[];
  constructor(private router: Router) {}

  @Output() acaoFechaMenu: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  redirecionaHome() {
    this.router.navigate(['/home']);
  }

  clearSession = () => {};

  clickMenu = () => {
    this.clearSession();

    this.acaoFechaMenu.emit();
  };

  collapseItem = (item: any, parent: any[]) => {
    if (item.collapsed) {
      parent.map((p) => (p.collapsed = true));
      item.collapsed = false;
    } else {
      item.collapsed = !item.collapsed;
    }
  };
}
