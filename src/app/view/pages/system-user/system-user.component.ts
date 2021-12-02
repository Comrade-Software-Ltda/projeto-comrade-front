import { Component, OnInit } from '@angular/core';
import { Service, Employee, State } from './service';
import { GetAllSystemUserUsecase } from '../../../core/usecases/system-user/get-all-airplane.usecase';
import { SystemUserModel } from '../../../core/models/system-user.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';

@Component({
  selector: 'app-system-user',
  templateUrl: 'system-user.component.html',
  styleUrls: ['system-user.component.scss'],
  providers: [Service],
})
export class SystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(private service: Service, private getAllSystemUser: GetAllSystemUserUsecase) {}

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
