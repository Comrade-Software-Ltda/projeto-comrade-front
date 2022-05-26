import { Component, OnInit } from '@angular/core';
import dxTooltip from 'devextreme/ui/tooltip';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { GetUsuarioByIdUsecase } from 'src/app/core/usecases/usuario/get-by-id-airplane.usecase';
import { PostUpdateUsuarioPreferenceUsecase } from 'src/app/core/usecases/usuario/post-update-usaurio-preference';

@Component({
  templateUrl: 'preference.component.html',
  styleUrls: ['./preference.component.scss'],
})
export class PreferenceComponent implements OnInit {
  userPreferences: any = { idadeMinima: 18, idadeMaxima: 85, preferenciaGenero: 'Outros' };
  generos: string[];
  tooltip = {
    enabled: true,
    format: (value: any) => value,
    showMode: 'always',
    position: 'top',
  };

  constructor(
    private getUsuarioByIdUsecase: GetUsuarioByIdUsecase,
    private postUpdateUsuarioPreferenceUsecase: PostUpdateUsuarioPreferenceUsecase
  ) {
    this.generos = ['Homem', 'Mulher', 'Outros'];
  }

  onClick = (e: Event) => {
    this.postUpdateUsuarioPreferenceUsecase
      .execute({ ...this.userPreferences, id: 1 } as UsuarioModel)
      .subscribe((usuario) => {
        this.userPreferences = usuario.data;
      });
  };

  ngOnInit(): void {
    this.getUsuarioByIdUsecase.execute(1).subscribe((usuario) => {
      this.userPreferences = usuario.data;
    });
  }
}
