import { Component, Inject, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InterfaceRouteMap, INTERFACE_ROUTE_MAPPING_TOKEN } from 'src/app/config';
import { FormControl } from '@angular/forms';
import { PatchResponse } from '../../interfacing/patch-response.interface';
import { Patch, PatchValue } from '../../interfacing/patch.interface';

export interface Resource<T> {
  patch(patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>>;
  delete(id: string): Observable<DeleteResponse>;
}

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent<I> extends BaseAtomicComponent<ObjectBase, I> implements OnInit {
  public menuItems: { [index: string]: Array<MenuItem> } = {};
  public alternativeObjects$!: Observable<ObjectBase[]>;
  @Input() public placeholder!: string;
  @Input() itemsMethod!: Function | null;
  @Input() override resource!: Resource<unknown>;

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
      this.newItemControl = new FormControl<ObjectBase>({} as ObjectBase, { nonNullable: true, updateOn: 'change' });

      if (this.isUni && this.data.length > 0) {
        this.newItemControl.disable(); // disables dropdown when univalent and already has a value
      }

      this.alternativeObjects$ = this.getPatchItems()!;
    }
  }

  public override addItem() {
    let val = this.newItemControl.value as ObjectBase;

    this.interfaceComponent
      .patch(this.resource, [
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
    this.interfaceComponent
      .patch(this.resource, [
        {
          op: 'remove',
          path: `${this.propertyName}/${this.data[index]._id_}`, // FIXME: this must be relative to path of this.resource
        },
      ])
      .subscribe();
  }

  public deleteItem() {
    this.interfaceComponent.delete(this.resource).subscribe();
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
