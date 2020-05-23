import { Component } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import {Location} from '@angular/common';

@Component({
  selector: 'nb-auth-block',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link" aria-label="Back"><i class="icon nb-arrow-thin-left"></i></a>
            </nav>
          </nb-card-header>
          <nb-card-body>
           
              <router-outlet></router-outlet>
           
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
   
}
