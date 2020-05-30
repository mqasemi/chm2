import { Component, OnInit, Input } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import jquery from 'jquery';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss','./assets/css/util.css',
'./assets/css/main.css',
'./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class LoginComponent extends NbLoginComponent  implements OnInit {

  ngOnInit() {
// const script = document.createElement('script');
// script.src = 'authloginmainjs.js';
// script.type = 'text/javascript';
// script.async = true;
// script.charset = 'utf-8';
// jquery('#scripts').append(script);
  }
 

}
