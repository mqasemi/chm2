import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NB_WINDOW, NbMenuItem } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHelper } from '../../../shaered-modules/service/translateHelper';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'logout',url:'/auth/logout'} ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,private translateHelper:TranslateHelper,
              private authService: NbAuthService ) {
               
                this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
           // here we receive a payload from the token and assigns it to our `user` variable 
          this.user = token.getPayload();
        }

      });
    
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
   this.translateHelper.translateMenuItems(this.userMenu);

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
