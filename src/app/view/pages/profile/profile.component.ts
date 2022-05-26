import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { GetUsuarioByIdUsecase } from 'src/app/core/usecases/usuario/get-by-id-airplane.usecase';
import { PostUpdateUsuarioUsecase } from 'src/app/core/usecases/usuario/post-update-usuario.usecase';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  generos: string[];

  constructor(
    private getUsuarioByIdUsecase: GetUsuarioByIdUsecase,
    private postUpdateUsuarioUsecase: PostUpdateUsuarioUsecase
  ) {
    this.generos = ['Homem', 'Mulher', 'Outros'];
  }

  onClick = (e: Event) => {
    this.postUpdateUsuarioUsecase
      .execute({ ...this.user, id: 1 } as UsuarioModel)
      .subscribe((usuario) => {
        this.user = usuario.data;
      });
  };

  ngOnInit(): void {
    this.getUsuarioByIdUsecase.execute(1).subscribe((usuario) => {
      console.log(usuario.data);
      this.user = usuario.data;
    });
  }
}
