import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { AirplaneModel } from '../../../core/domain/airplane.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenModalService } from '../../../components/screen-modal/screen-modal.service';
import { PutAirplaneUsecase } from '../../../core/usecases/airplane/put-airplane.usecase';
import { GetAirplaneByIdUsecase } from '../../../core/usecases/airplane/get-airplane-by-id.usecase';
import { DeleteAirplaneUsercase } from '../../../core/usecases/airplane/delete-airplane.usercase';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AirplaneEditComponent implements OnInit, OnChanges {
  titleModal = 'Edit Airplane';
  @Output() notify = new EventEmitter();
  @Input()
  airplane?: AirplaneModel;

  public registerForm!: FormGroup;
  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: ScreenModalService,
    private putAirplane: PutAirplaneUsecase,
    private getAirplaneByID: GetAirplaneByIdUsecase,
    private deleteAirplane: DeleteAirplaneUsercase
  ) {}

  ngOnInit() {
    this.startForm();
  }

  public startForm() {
    this.registerForm = this.fb.group({
      codigo: [this.airplane?.codigo],
      modelo: [this.airplane?.modelo, Validators.required],
      quantidadePassageiro: [this.airplane?.quantidadePassageiro, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.airplane?.id)
      this.getAirplaneByID.execute(this.airplane?.id).subscribe((x) => {
        if (x.codigo == 200) {
          this.registerForm = this.fb.group({
            codigo: [this.airplane?.codigo],
            modelo: [this.airplane?.modelo, Validators.required],
            quantidadePassageiro: [this.airplane?.quantidadePassageiro, Validators.required],
          });
        } else {
          alert('Erro ao abrir registro!');
        }
      });
  }

  onUpdate() {
    const updatedAirplane: AirplaneModel = {
      codigo: this.registerForm.value.codigo,
      modelo: this.registerForm.value.modelo,
      quantidadePassageiro: this.registerForm.value.quantidadePassageiro,
      dataRegistro: this.airplane?.dataRegistro || new Date(),
      id: this.airplane?.id,
    };
    this.putAirplane.execute(updatedAirplane).subscribe(
      () => {
        this.closeModalRefreshTable();
      },
      (e) => {
        alert(e);
        this.closeModalRefreshTable();
      }
    );
  }

  onDelete() {
    if (this.airplane?.id)
      this.deleteAirplane.execute(this.airplane.id).subscribe(
        () => {
          this.closeModalRefreshTable();
        },
        () => {
          alert('Erro ao excluir registro!');
          this.closeModalRefreshTable();
        }
      );
  }

  closeModalRefreshTable() {
    this.modalService.close('airplane-edit');
    this.notify.emit();
  }
}
