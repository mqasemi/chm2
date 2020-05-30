import { Component } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import {Location} from '@angular/common';

@Component({
  selector: 'nb-auth-block',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column class="layout-column1">
      <router-outlet></router-outlet>
</nb-layout-column>
    
    
     
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
   
}
