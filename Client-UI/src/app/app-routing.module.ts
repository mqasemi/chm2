import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './services/auth-guard.service';


export const routes: Routes = [
  {
    path: 'pages',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },{
    path: 'auth', loadChildren:'./Auth/auth.module#AuthModule'
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
