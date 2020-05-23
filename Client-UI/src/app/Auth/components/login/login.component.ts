import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.component.css',
'./css/main.css','./css/util.css']
})
export class LoginComponent extends NbLoginComponent  implements OnInit {


  ngOnInit() {
  }

}
