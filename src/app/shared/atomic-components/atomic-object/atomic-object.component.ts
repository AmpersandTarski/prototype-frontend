import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '../../BaseComponent.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseComponent {
  @Input() property!: any | Array<any>;

  menu: Array<MenuItem> = [
    {
      label: 'Project',
      routerLink: ['/project', '123'],
      command: (event?) => {
        console.log('click');
      },
    },
  ];
  
  constructor(private router: Router) {
    super();
  }

  navigateToSingleEntity(id: string, type: string) {
    this.router.navigate([this.getRouterLink(type), `${id}`]);
  }

  getRouterLink(ifc: any): string {
    return `/${ifc.id.toLowerCase()}`;
  }

  toPrimeNgMenuModel(ifcs: Array<any>): Array<MenuItem> {
    return ifcs.map(
      (ifc) =>
        <MenuItem>{
          label: ifc.label,
          icon: 'pi pi-refresh',
          command: (event?) => {
            console.log('click');
          },
          // routerLink: [ifc.id, '123'],
        }
    );
  }
}
