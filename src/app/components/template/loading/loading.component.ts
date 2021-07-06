import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="overlay">
      <div class="preloading-comrade">
        <div class="comrade-1"></div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
