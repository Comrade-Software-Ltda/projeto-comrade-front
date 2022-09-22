import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemMenuModel } from 'src/app/core/models/system-menu.model';
import { DeleteSystemMenuUsecase } from 'src/app/core/usecases/system-menu/delete-system-menu.usecase';
import { GetAllSystemMenuUsecase } from 'src/app/core/usecases/system-menu/get-all-system-menu.usecase';
import { EditSystemMenuUsecase } from 'src/app/core/usecases/system-menu/edit-system-menu.usecase';
import { CreateSystemMenuUsecase } from 'src/app/core/usecases/system-menu/create-system-menu.usecase';
import { MenuIcons } from 'src/assets/icons-menu';
@Component({
  selector: 'app-system-menu',
  templateUrl: 'system-menu.component.html',
  styleUrls: ['system-menu.component.scss'],
  providers: [],
})
export class SystemMenuComponent implements OnInit {
  dataSource!: SystemMenuModel[];
  systemMenuSelected?: SystemMenuModel;
  menuIcons: string[] = MenuIcons;

  searchModeOption = 'contains';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;
  showDataBeforeSearchOption = false;

  constructor(
    private getAllSystemMenu: GetAllSystemMenuUsecase,
    private createSystemMenu: CreateSystemMenuUsecase,
    private deleteSystemMenu: DeleteSystemMenuUsecase,
    private editSystemMenu: EditSystemMenuUsecase
  ) {}

  ngOnInit(): void {
    this.getAllSystemMenu
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemMenuModel>) => {
        this.dataSource = grid.data!;
      });
  }

  delete(e: any): void {
    this.deleteSystemMenu.execute(e.key).subscribe();
  }

  beforeSave(e: any): void {
    e.data.registerDate = new Date();
  }

  onEditingStart(e: any): void {
    this.systemMenuSelected = e.data;
  }

  save(e: any): void {
    this.createSystemMenu.execute(e.data).subscribe();
  }

  update(e: any): void {
    this.editSystemMenu.execute(e.data).subscribe();
  }
}
