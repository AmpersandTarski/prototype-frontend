import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems as adminMenuItems } from '../admin/admin.module';
import { LayoutService } from './service/app.layout.service';
import { MenuService } from './app.menu.service';
import { INTERFACE_ROUTE_MAP } from '../project-administration/project-administration.module';
import { INTERFACE_ROUTE_MAPPING_TOKEN } from '../config';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: MenuItem[] = [];

  constructor(public layoutService: LayoutService, public menuService: MenuService) {}

  ngOnInit() {
    // Add prototype menu items
    this.addPrototypeItems();
    // Add admin menu items
    adminMenuItems.forEach((item) => this.model.push(item));

    this.fetchMenuItems();
  }

  /* Adds MenuItems to the navigation menu */
  fetchMenuItems() {
    let childItems = new Array<MenuItem>(); // Storage for child items where parent is not added yet.
    this.menuService.getMenuItems().subscribe((navs) => {
      // Add fetched menu items
      navs.forEach((nav) => {
        var menuItem: MenuItem;
        if (nav.ifc == null) {
          if (nav.url == null) {
            // A root/parent item
            menuItem = {
              id: nav.id,
              label: nav.label,
              icon: 'pi pi-fw pi-bars',
              routerLink: [],
              items: [],
            };

            this.model.push(menuItem);
          } else {
            // External URL
            menuItem = {
              label: nav.label,
              icon: 'pi pi-fw pi-bars',
              url: nav.url,
            };

            this.model.push(menuItem);
          }
        } else {
          // Direct link to interface
          menuItem = {
            id: nav.id,
            label: nav.label,
            icon: 'pi pi-fw pi-bars',
            routerLink: [INTERFACE_ROUTE_MAP[nav.ifc]],
          };

          // If item has a parent, add it to the parent items.
          // Else try adding it at the end.
          if (nav.parent != null) {
            menuItem.fragment = nav.parent;
            let parentItem = this.model.find((item) => item.id == nav.parent);
            if (parentItem == null) {
              childItems.push(menuItem);
            } else if (parentItem.items == null) {
              // items was still undefined
              parentItem.items = [menuItem];
            } else {
              // items has been defined. Add to array
              parentItem.items.push(menuItem);
            }
          }
        }
      });

      // Loop through childItems until they are all added to the menu.
      while (childItems.length > 0) {
        let childItem = childItems.pop() ?? {};
        let parentItem = this.model.find((item) => item.id == childItem.fragment);
        parentItem == null ? childItems.push(childItem) : parentItem.items?.push(childItem);
      }
    });
  }

  addPrototypeItems() {
    let prototypeItems: MenuItem = {
      label: 'Prototype',
      items: [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        { label: 'Tools', icon: 'pi pi-fw pi-code', routerLink: ['/tools'] },
      ],
    };
    this.model.push(prototypeItems);
  }
}
