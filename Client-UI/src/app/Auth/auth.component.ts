import { Component } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import {Location} from '@angular/common';

@Component({
    selector: 'auth',
    template: `
    <nb-layout>
      <nb-layout-column>
      <router-outlet></router-outlet>
        
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
   
}
