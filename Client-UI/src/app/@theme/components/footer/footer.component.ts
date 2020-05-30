import { Component } from '@angular/core';
import { TranslateHelper } from '../../../shaered-modules/service/translateHelper';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
     {{'copy-right'|translate}} <b><a href="https://bki.ir" target="_blank">{{'logo'|translate}}</a></b> 2019
    </span>
    <!-- <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div> -->
  `,
})
export class FooterComponent {
  
}
