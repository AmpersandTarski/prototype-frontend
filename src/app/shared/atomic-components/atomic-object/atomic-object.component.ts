import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AtomicComponentType } from '../../models/atomic-component-types';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseAtomicComponent<ObjectBase> implements OnInit {
  public menuItems: { [index: string]: Array<MenuItem> } = {};
  public alternativeObjects$!: Observable<ObjectBase[]>;
  @Input() public placeholder!: string;
  @Input() itemsMethod!: Function | null;

  constructor(private router: Router, private http: HttpClient /* required to make property 'itemsMethod' work  */) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initNewItemControl(AtomicComponentType.Object);
      this.newItemControl.valueChanges.subscribe((x: string | boolean | ObjectBase) => {
        const obj = x as ObjectBase;

        this.resource
          .patch([
            {
              op: 'add',
              path: this.propertyName,
              value: obj._id_,
            },
          ])
          // TODO: Fix this bug
          .subscribe(() => {
            this.newItemControl.setValue({} as ObjectBase);
            for (const item of this.data) {
              if (item._id_ == obj._id_) return;
            }
            this.data.push(x as ObjectBase);
          });
      });
    }

    this.data.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });

    if (this.canUpdate()) {
      if (this.isUni && this.data.length > 0) return;
      this.alternativeObjects$ = this.getPatchItems()!;
    }
  }

  public remove(object: ObjectBase) {
    return this.resource
      .patch([
        {
          op: 'remove',
          path: `${this.propertyName}/${object._id_}`,
        },
      ])
      .subscribe(() => {
        this.newItemControl.setValue('');
        for (const item of this.data) {
          if (item._id_ == object._id_) return;
          const index = this.data.indexOf(object, 0);
          if (index > -1) {
            this.data.splice(index, 1);
          }
        }
      });
  }

  public override deleteItem(index: number) {
    //TODO connect to delete request
  }

  public navigateToEntity(type: string, id: string) {
    this.router.navigate(['p', type.toLowerCase(), `${id}`]);
  }

  private toPrimeNgMenuModel(ifcs: Array<InterfaceRefObject>, id: string): Array<MenuItem> {
    return ifcs.map(
      (ifc) =>
        <MenuItem>{
          label: ifc.label,
          icon: 'pi pi-refresh',
          command: () => this.navigateToEntity(ifc.id, id),
        },
    );
  }

  private getPatchItems(): Observable<ObjectBase[]> | null {
    if (this.itemsMethod == null) return null;
    return this.itemsMethod();
  }
}
