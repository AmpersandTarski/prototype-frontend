import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '../../BaseComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseComponent implements OnInit {
  @Input() property!: ObjectBase | Array<ObjectBase>;

  constructor(private router: Router) {
    super();
  }

  public navigateToEntity(type: string, id: string) {
    this.router.navigate(['p', type.toLowerCase(), `${id}`]);
  }

  public toArray(prop: ObjectBase | Array<ObjectBase>): Array<ObjectBase> {
    if (Array.isArray(prop)) {
      return prop;
    } else if (prop === null) {
      return [];
    } else {
      return [prop];
    }
  }

  public toPrimeNgMenuModel(ifcs: Array<InterfaceRefObject>, id: string): Array<MenuItem> {
    return ifcs.map(
      (ifc) =>
        <MenuItem>{
          label: ifc.label,
          icon: 'pi pi-refresh',
          command: () => this.navigateToEntity(ifc.id, id),
        },
    );
  }
}
