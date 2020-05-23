import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class TranslateHelper {
  constructor(private translate: TranslateService) {
    translate.use('fa');
  }
  translateMenuItems(menu: NbMenuItem[]) {
    menu.forEach((item) => {
      this.translateMenuItem(item);
    });
  }

  translateMenuItem(menuItem: NbMenuItem) {
    if (menuItem.children != null) {
      menuItem.children.forEach((item) => this.translateMenuItem(item));
    }

    if (menuItem.data === undefined) {
      menuItem.data = menuItem.title;
      this.translate.get(menuItem.title).subscribe(value=>{
          menuItem.title=value;
      })
     // menuItem.title = this.translate.instant();
    } else {
        this.translate.get(menuItem.data).subscribe(value=>{
            menuItem.title=value;
        })
     // menuItem.title = this.translate.instant(menuItem.data);
    }
  }
}
