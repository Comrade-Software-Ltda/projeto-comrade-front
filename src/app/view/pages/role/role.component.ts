import { Component, OnInit } from '@angular/core';
import { GetAllRoleUsecase } from '../../../core/usecases/role/get-all-role.usecase';
import { RoleModel } from '../../../core/models/role.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';

@Component({
  selector: 'app-role',
  templateUrl: 'role.component.html',
  styleUrls: ['role.component.scss'],
  providers: [],
})
export class RoleComponent implements OnInit {
  dataSource!: RoleModel[];
  constructor(private getAllRole: GetAllRoleUsecase) {}

  ngOnInit(): void {
  }

  getAll(){
    this.getAllRole
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<RoleModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
