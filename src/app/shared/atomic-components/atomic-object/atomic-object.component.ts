import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '../../BaseComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject } from 'src/app/project-administration/person/person.interface';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent<T> extends BaseComponent {
  @Input() property!: T | Array<T>;

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
    this.router.navigate([this.getRouterLink({ id: id }), `${id}`]);
  }

  getRouterLink(ifc: { id: string }): string {
    return `/${ifc.id.toLowerCase()}`;
  }

  toPrimeNgMenuModel(ifcs: Array<InterfaceRefObject>): Array<MenuItem> {
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
