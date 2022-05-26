import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { GetAllFotoUsecase } from 'src/app/core/usecases/foto/get-all-foto-by-usuario.usecase';
import { GetUsuariosByUserPreferenciaUsecase } from 'src/app/core/usecases/usuario/get-usuario-by-user-preferencia.usecase';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  currentUsuario?: UsuarioModel = { dataDeNascimento: new Date(), email: '', genero: '', nome: '' };

  constructor(
    private getUsuariosByUserPreferenciaUsecase: GetUsuariosByUserPreferenciaUsecase,
    private getAllFotoUsecase: GetAllFotoUsecase
  ) {}

  onClick(isCurtida: boolean) {}

  ngOnInit(): void {
    this.loadUsuarios(1);
  }

  getFotos(user: UsuarioModel) {
    user.fotos = [];
    this.getAllFotoUsecase.execute(user?.id!).subscribe((e) => {
      e.data?.forEach((e) => user?.fotos?.push(e.url));
    });
  }

  getAge(user: UsuarioModel) {
    let timeDiff = Math.abs(Date.now() - user.dataDeNascimento.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  loadUsuarios(userId: number) {
    this.getUsuariosByUserPreferenciaUsecase.execute(userId).subscribe((e) => {
      this.usuarios = e.data ?? [];
      this.currentUsuario = this.usuarios?.pop();
      if (this.currentUsuario?.id) this.getFotos(this.currentUsuario);
    });
  }

  nextUser() {
    if (this.usuarios.length == 0) {
      this.loadUsuarios(1);
    } else {
      this.currentUsuario = this.usuarios?.pop();
      if (this.currentUsuario?.id) this.getFotos(this.currentUsuario);
    }
  }
}
