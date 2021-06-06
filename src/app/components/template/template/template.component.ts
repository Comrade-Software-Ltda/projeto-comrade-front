import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @Input() tipoLayout = 'full';
  @Input() isLoading = false;
  @Input() redirect = '/home';
  @Input() textoBreadcrumb!: any[];
  @Output() clickLink? = new EventEmitter();
  @Input() menuCollapsed = false;
  nomeUsuario = '';
  isMobile = false;

  constructor() {}

  ngOnInit() {}

  formataNomeUsuario(nome: string) {
    this.nomeUsuario = nome.replace(
      /(\w)(\w*)/g,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    );

    this.nomeUsuario = this.nomeUsuario.replace(
      /\W*(\w+).*?(\w+)\W*$/,
      (g0, g1, g2) => g1 + ' ' + g2
    );
  }

  fechaMenu($event: any) {
    this.menuCollapsed = true;
  }

  expadirMenu($event: any) {
    this.menuCollapsed = false;
  }
}
