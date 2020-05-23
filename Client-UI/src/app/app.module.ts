/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbThemeModule,
  NbLayoutDirection,
} from '@nebular/theme';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { RoleProvider } from './services/role.provider';


// import { NbAuthModule } from './auth/auth.module';
// import { NbOidcAuthStrategy } from './auth/strategies/oidc/oidc-strategy';
// import { NbOAuth2AuthStrategy } from './auth/strategies/oauth2/oauth2-strategy';
// import { oidcStrategyOptions } from './auth/strategies/oidc/oidc-strategy.options';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbThemeModule.forRoot({name:'corporate'}, null, null, NbLayoutDirection.RTL),
    TranslateModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint:'http://localhost:5000',
          login:{
           endpoint: '/api/auth/login'
          },
          logout:{
            endpoint:''
          },
          token: {
            class: NbAuthJWTToken,
            key:'token'
          }
        }),
      ],
      forms: {
        login:formSetting,
      },
    }), 
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments'],
        },
        user: {
          parent: 'guest',
          create: 'comments',
        },
        moderator: {
          parent: 'user',
          create: 'news',
          remove: '*',
        },
      },
    }),
    // NbAuthModule.forRoot({
    //   strategies:[
    //     NbOAuth2AuthStrategy.setup({
    //       name:'chmUi',
    //       clientId:'654246011554-ah39m5egij2k43a751raqlq58afvlige.apps.googleusercontent.com',
    //       clientSecret:'Tt_-VUg89WYo5IIcd4aXL9dl',
    //       authorize:{
    //          redirectUri:'http://localhost:4200/pages/auth-callback',
    //          endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    //          responseType: NbOAuth2ResponseType.TOKEN,
    //          scope: 'https://www.googleapis.com/auth/userinfo.profile',
    //       }
    //     })
    //   ]
    // })
 
  ],
  bootstrap: [AppComponent],
  providers:[
    { provide: NbRoleProvider, useClass: RoleProvider },
  ]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}