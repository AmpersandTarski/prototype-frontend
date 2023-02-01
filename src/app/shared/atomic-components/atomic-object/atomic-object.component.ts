import { Component, Inject, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { InterfaceRouteMap, INTERFACE_ROUTE_MAPPING_TOKEN } from 'src/app/config';

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

  constructor(
    private router: Router,
    private http: HttpClient, // required to make property 'itemsMethod' work
    @Inject(INTERFACE_ROUTE_MAPPING_TOKEN) private interfaceRouteMap: InterfaceRouteMap,
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.data.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });

    if (this.canUpdate()) {
      this.initNewItemControl(AtomicComponentType.Object);

      if (this.isUni && this.data.length > 0) {
        this.newItemControl.disable(); // disables dropdown when univalent and already has a value
      }

      this.alternativeObjects$ = this.getPatchItems()!;
    }
  }

  public override addItem() {
    let val = this.newItemControl.value as ObjectBase;

    this.resource
      .patch([
        {
          op: 'add',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: val._id_,
        },
      ])
      .subscribe(() => {
        if (this.isUni) {
          // since an element has been added, the dropdown menu should be disabled again when univalent
          this.newItemControl.disable();
        }
        this.data.push(val);
        this.newItemControl.setValue({} as ObjectBase);
      });
  }

  public override removeItem(index: number) {
    this.resource
      .patch([
        {
          op: 'remove',
          path: `${this.propertyName}/${this.data[index]._id_}`, // FIXME: this must be relative to path of this.resource
        },
      ])
      // Working with generics doesn't work well with this subscribe method due to the types of PatchResponse<T>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe((x: any) => {
        if (x.invariantRulesHold && x.isCommitted) {
          if ((!this.isUni && x.content[this.propertyName].length != this.data.length) || this.isUni) {
            this.data.splice(index, 1); // data is only spliced when change has occurred
          }
          if (this.isUni) {
            // since an element has been removed, the dropdown menu should be enabled again when univalent
            this.newItemControl.enable();
          }
        } else {
          // TODO: show warning message; isTot requirement has been violated
        }
      });
  }

  public override deleteItem(index: number) {
    //TODO connect to delete request
  }

  public navigateToInterface(interfaceName: string, resourceId: string): Promise<boolean> {
    const routePath = this.interfaceRouteMap[interfaceName];
    if (routePath === undefined) {
      throw new Error(`No route path defined for interface ${interfaceName}`);
    }

    return this.router.navigate([routePath, `${resourceId}`]);
  }

  private toPrimeNgMenuModel(ifcs: Array<InterfaceRefObject>, id: string): Array<MenuItem> {
    return ifcs.map(
      (ifc) =>
        <MenuItem>{
          label: ifc.label,
          icon: 'pi pi-refresh',
          command: () => this.navigateToInterface(ifc.id, id),
        },
    );
  }

  // Find which entities are able to be added to the dropdown menu
  private getPatchItems(): Observable<ObjectBase[]> | null {
    if (this.itemsMethod == null) return null;

    let objects: Observable<ObjectBase[]> = this.itemsMethod();
    // grab only the elements for the dropdown menu when they don't exist yet
    objects = objects.pipe(
      map((dropdownobjects) => dropdownobjects.filter((object) => !this.data.map((y) => y._id_).includes(object._id_))),
    );

    return objects;
  }
}
