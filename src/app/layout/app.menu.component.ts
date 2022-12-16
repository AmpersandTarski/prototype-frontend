import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { menuItems as adminMenuItems } from '../admin/admin.module';
import { menuItems as projectMenuItems } from '../project-administration/project-administration.module';
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
        label: 'Prototype',
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          { label: 'Tools', icon: 'pi pi-fw pi-code', routerLink: ['/tools'] },
        ],
      },
      ...projectMenuItems,
      ...adminMenuItems,
    ];
  }
}
