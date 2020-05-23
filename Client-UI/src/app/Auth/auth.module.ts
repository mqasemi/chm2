import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbInputModule, NbButtonModule,
     NbCheckboxModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shaered-modules/shared.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
    SharedModule, 
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ],
    declarations:[
        AuthComponent,
        LoginComponent,
    ]
})
export class AuthModule {
}
