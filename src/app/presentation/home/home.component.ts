import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllAirplaneUsecase } from 'src/app/core/usecases/airplane/get-all-airplane.usecase';
import { PageFilterModel } from 'src/app/core/utils/page-filter.model';
import { ScreenModalService } from '../../components/screen-modal/screen-modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  public loading = false;
  layout = 'full';
  textoBreadcrumb = [{ title: 'Início', link: '' }];

  constructor(private router: Router) {}
  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
