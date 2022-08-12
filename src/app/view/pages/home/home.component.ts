import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bodyText: string | undefined;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  openModal(id: string) {
    console.log("teste");
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
