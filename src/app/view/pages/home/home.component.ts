import { Component, OnInit } from '@angular/core';
import { GetAllUsuarioUsecase } from 'src/app/core/usecases/usuario/get-all-airplane.usecase';
import { GetUsuarioByIdUsecase } from 'src/app/core/usecases/usuario/get-by-id-airplane.usecase';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource: string[];
  constructor(
    private getAllUsuarioUsecase: GetAllUsuarioUsecase,
    private getUsuarioByIdUsecase: GetUsuarioByIdUsecase
  ) {
    this.dataSource = [
      'https://www.rbsdirect.com.br/imagesrc/25743537.jpg',
      'https://www.petz.com.br/blog/wp-content/uploads/2020/01/vira-lata-caramelo.jpg',
      'https://static1.patasdacasa.com.br/articles/1/39/1/@/1318-vira-lata-caramelo-nao-importa-onde-voc-articles_media_mobile-4.jpg',
    ]; //PhotoService
  }
  ngOnInit(): void {
    this.getAllUsuarioUsecase.execute().subscribe((e) => console.log);
    this.getUsuarioByIdUsecase.execute(1).subscribe((e) => e);
  }
}
