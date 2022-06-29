import { Component, OnInit } from '@angular/core';
import { GetAllAirplaneUsecase } from 'src/app/core/usecases/airplane/get-all-airplane.usecase';
import { CreateAirplaneUsecase } from 'src/app/core/usecases/airplane/create-airplane.usecase';
import { DeleteAirplaneUsecase } from 'src/app/core/usecases/airplane/delete-airplane.usecase';
import { UpdateAirplaneUsecase } from 'src/app/core/usecases/airplane/update-airplane.usecase';
import { AirplaneModel } from 'src/app/core/models/airplane.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';

@Component({
  selector: 'app-airplane',
  templateUrl: 'airplane.component.html',
  styleUrls: ['airplane.component.scss'],
  providers: [],
})
export class AirplaneComponent implements OnInit {
  dataSource!: AirplaneModel[];
  constructor(
    private getAllAirplane: GetAllAirplaneUsecase,
    private createAirplane: CreateAirplaneUsecase,
    private deleteAirplane: DeleteAirplaneUsecase,
    private updateAirplane: UpdateAirplaneUsecase
  ) {}

  ngOnInit(): void {
    this.getAllAirplane
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<AirplaneModel>) => {
        console.log(grid);
        this.dataSource = grid.data!;
      });
  }

  delete(e: any): void {
    this.deleteAirplane.execute(e.key).subscribe();
  }
}
