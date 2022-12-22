import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseAtomicComponent<ObjectBase> implements OnInit {
  public menuItems: { [index: string]: Array<MenuItem> } = {};

  constructor(private router: Router) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.data.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });
  }

  public remove(fieldName: string, object: ObjectBase, patchResource: any) {
    //TODO: connect to patch request with angular forms
  }

  public destroy(fieldName: string, object: ObjectBase) {
    //TODO connect to delete request
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
