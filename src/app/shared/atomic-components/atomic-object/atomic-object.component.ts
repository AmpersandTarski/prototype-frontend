import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '../../BaseComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AtomicObjectMenuItem = any;

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseComponent implements OnInit {
  @Input() property!: ObjectBase | Array<ObjectBase>;
  public menuItems: AtomicObjectMenuItem = [];

  constructor(private router: Router) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.isUni) {
      this.property as ObjectBase;
      this.menuItems[(this.property as ObjectBase)._id_] = this.toPrimeNgMenuModel(
        (this.property as ObjectBase)._ifcs_,
        (this.property as ObjectBase)._id_,
      );
    } else {
      (this.property as Array<ObjectBase>).forEach((object) => {
        this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
      });
    }
  }

  public navigateToEntity(type: string, id: string) {
    this.router.navigate(['p', type.toLowerCase(), `${id}`]);
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
