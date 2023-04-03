import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems as adminMenuItems } from '../admin/admin.module';
import { LayoutService } from './service/app.layout.service';
import { MenuService } from './app.menu.service';
import { InterfaceRouteMap, INTERFACE_ROUTE_MAPPING_TOKEN } from '../config';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: MenuItem[] = [];

  constructor(
    public layoutService: LayoutService,
    public menuService: MenuService,
    @Inject(INTERFACE_ROUTE_MAPPING_TOKEN) private interfaceRouteMap: InterfaceRouteMap,
  ) {}

  ngOnInit() {
    this.loadOrCreateMenu();
  }

  /* Creates the menuItems from API data, or load from session storage when it already exists. */
  private loadOrCreateMenu() {
    let navbarItems = sessionStorage.getItem('menuItems');
    if (navbarItems != null) {
      // Using menu items in session storage
      this.model = JSON.parse(navbarItems) as Array<MenuItem>;
    } else {
      // Add prototype menu items
      this.addPrototypeItems();
      // Add admin menu items
      adminMenuItems.forEach((item) => this.model.push(item));
      // Add menu items from API
      this.addMenuItems();
    }
  }

  /* Adds MenuItems to the navigation menu */
  private addMenuItems() {
    let childItems = new Array<MenuItem>(); // Storage for child items where parent is not added yet.
    this.menuService.getMenuItems().subscribe((navs) => {
      // Add fetched menu items
      navs.forEach((nav) => {
        let menuItem: MenuItem;

        /* Create a variable to determine the type of menu item */
        let itemType = 2 * Number(nav.ifc != null) + Number(nav.url != null);
        switch (itemType) {
          case 0: {
            // A root/parent item
            menuItem = {
              id: nav.id,
              label: nav.label,
              icon: 'pi pi-fw pi-bars',
              routerLink: [],
              items: [],
            };

            this.model.push(menuItem);
            break;
          }
          case 1: {
            // External URL
            menuItem = {
              label: nav.label,
              icon: 'pi pi-fw pi-bars',
              url: nav.url ?? undefined,
            };

            this.model.push(menuItem);
            break;
          }
          default: {
            // Direct link to interface
            menuItem = {
              id: nav.id,
              label: nav.label,
              icon: 'pi pi-fw pi-bars',
              routerLink: [this.interfaceRouteMap[nav.ifc ?? 'undefined']],
            };

            // If item has a parent, add it to the parent items.
            // Else try adding it at the end.
            if (nav.parent == null) {
              break;
            }
            menuItem.fragment = nav.parent;
            let parentItem = this.model.find((item) => item.id == nav.parent);
            if (parentItem == null) {
              childItems.push(menuItem);
            } else {
              this.addItemToParent(parentItem, menuItem);
            }
            break;
          }
        }
      });

      // Loop through childItems until they are all added to the menu.
      while (childItems.length > 0) {
        let childItem = childItems.pop() ?? {};
        let parentItem = this.model.find((item) => item.id == childItem.fragment);
        parentItem == null ? childItems.push(childItem) : this.addItemToParent(parentItem, childItem);
      }

      // Store menu items in session storage
      this.menuService.setSessionStorageItem('menuItems', JSON.stringify(this.model));
    });
  }

  addItemToParent(parentItem: MenuItem, menuItem: MenuItem) {
    menuItem.fragment = undefined; // removes temporary fragment
    if (parentItem.items == null) {
      // items was still undefined
      parentItem.items = [menuItem];
    } else {
      // items has been defined. Add to array
      parentItem.items.push(menuItem);
    }
  }

  private addPrototypeItems() {
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
