import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

import { NbMenuItem } from '@nebular/theme';
import { TranslateHelper } from '../shaered-modules/service/translateHelper';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor(private translateHelper: TranslateHelper) {
    this.menu = MENU_ITEMS;
  }
  ngOnInit() {
    this.translateHelper.translateMenuItems(this.menu);
  }
}
