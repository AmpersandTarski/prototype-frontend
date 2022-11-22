import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { menuItems as adminMenuItems } from '../admin/admin.module';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] }],
      },
      {
        label: 'Tools',
        items: [{ label: 'Tools', icon: 'pi pi-fw pi-code', routerLink: ['/tools'] }],
      },
      {
        label: 'Pages',
        items: [
          {
            label: 'Active projects',
            icon: 'pi pi-fw pi-bars',
            routerLink: ['/active-projects'],
          },
          {
            label: 'Project details',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/project'],
          },
          {
            label: 'Persons details',
            icon: 'pi pi-fw pi-bars',
            routerLink: ['/persons'],
          },
          {
            label: 'Person details',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/person'],
          },
          // {
          //   label: 'Menu',
          //   icon: 'pi pi-fw pi-bars',
          //   routerLink: ['/uikit/menu'],
          //   routerLinkActiveOptions: {
          //     paths: 'subset',
          //     queryParams: 'ignored',
          //     matrixParams: 'ignored',
          //     fragment: 'ignored',
          //   },
          // },
          // {
          //   label: 'Sub-menu',
          //   icon: 'pi pi-fw pi-user',
          //   items: [
          //     {
          //       label: 'Login',
          //       icon: 'pi pi-fw pi-sign-in',
          //       routerLink: ['/auth/login'],
          //     },
          //     {
          //       label: 'Error',
          //       icon: 'pi pi-fw pi-times-circle',
          //       routerLink: ['/auth/error'],
          //     },
          //     {
          //       label: 'Access Denied',
          //       icon: 'pi pi-fw pi-lock',
          //       routerLink: ['/auth/access'],
          //     },
          //     {
          //       label: 'Submenu 1.1',
          //       icon: 'pi pi-fw pi-bookmark',
          //       items: [
          //         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
          //         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
          //         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
      ...adminMenuItems,
    ];
  }
}
