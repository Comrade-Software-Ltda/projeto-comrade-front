import { GetAllSystemUserUsecase } from './../../../core/usecases/system-user/get-all-system-user.usecase';
import { Component, OnInit } from '@angular/core';
import { SystemUserModel } from '../../../core/models/system-user.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';

@Component({
  selector: 'app-system-user',
  templateUrl: 'system-user.component.html',
  styleUrls: ['system-user.component.scss'],
  providers: [],
})
export class SystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(private getAllSystemUser: GetAllSystemUserUsecase) {}

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }

  testeCesar(oto: string): void {
    console.log(oto);
  }
}
