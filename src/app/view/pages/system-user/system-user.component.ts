import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { DeleteSystemUserUsecase } from 'src/app/core/usecases/system-user/delete-system-user.usecase';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';

@Component({
  selector: 'app-system-user',
  templateUrl: 'system-user.component.html',
  styleUrls: ['system-user.component.scss'],
  providers: [],
})
export class SystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private deleteSystemUser: DeleteSystemUserUsecase
  ) {}

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }

  delete(e: any): void {
    this.deleteSystemUser.execute(e.key).subscribe();
  }
}
