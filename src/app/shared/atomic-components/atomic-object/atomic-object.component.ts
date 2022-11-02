import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends AtomicComponent implements OnInit {
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

  constructor() {
    super();
  }

  ngOnInit(): void {}

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
