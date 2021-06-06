import { Component, ViewEncapsulation } from '@angular/core';

interface navIten {
  titulo: string;
  content: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  itens: navIten[] = [
    {
      titulo: 'Airplane',
      content: 'app-airplane-table',
    },
    {
      titulo: 'UsuarioSistema',
      content: '4123342',
    },
  ];
  active = 'Airplane';
}
