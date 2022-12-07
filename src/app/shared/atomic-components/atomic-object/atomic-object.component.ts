import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '../../BaseComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
type AtomicObjectMenuItem = any;

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseComponent implements OnInit {
  private _objects!: Array<ObjectBase>;
  public menuItems: AtomicObjectMenuItem = [];

  @Input()
  set property(value: ObjectBase | Array<ObjectBase>) {
    this._objects = this.requireArray(value);
  }
  get property(): Array<ObjectBase> {
    return this._objects;
  }

  constructor(private router: Router) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._objects.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });
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
