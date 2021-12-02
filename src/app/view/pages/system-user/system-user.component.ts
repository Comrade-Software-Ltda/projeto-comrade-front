import { Component } from '@angular/core';
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
export class SystemUserComponent {
  dataSource: Employee[];
  states: State[];

  constructor(service: Service, private getAllSystemUser: GetAllSystemUserUsecase) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 0 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        console.log(grid);
      });
  }
}
