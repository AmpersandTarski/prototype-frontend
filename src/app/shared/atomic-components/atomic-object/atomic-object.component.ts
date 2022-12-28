import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { InterfaceRefObject, ObjectBase } from '../../objectBase.interface';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/project-administration/backend.service';
import { PersonInterface } from 'src/app/project-administration/person/person.interface';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseAtomicComponent<ObjectBase> implements OnInit {
  public menuItems: { [index: string]: Array<MenuItem> } = {};
  public alternativeObjects$!: Observable<ObjectBase[]>;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });

  set selectedObject(object: ObjectBase | null | undefined) {
    if (object) {
      this.replaceObject(object);
    }
  }

  constructor(private router: Router, private service: BackendService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.data.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });

    if (this.canUpdate()) {
      this.alternativeObjects$ = this.getPatchItems();
    }

    this.newItemControl.valueChanges.subscribe((x: ObjectBase | string) => {
      if (x == '') return;
      const y = x as ObjectBase;

      return this.resource
        .patch([
          {
            op: 'add',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: y._id_,
          },
        ])
        .subscribe(() => {
          this.newItemControl.setValue('');
          for (const item of this.data) {
            if (item._id_ == y._id_) return;
          }
          this.data.push(x as ObjectBase);
        });
    });
  }

  getPatchItems(): Observable<ObjectBase[]> {
    return this.service.getPeople();
  }

  public remove(fieldName: string, object: ObjectBase, patchResource: unknown) {
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

  public replaceObject(object: ObjectBase) {
    let body = [
      {
        op: 'replace',
        path: '/Projectleider',
        value: object._id_,
      },
    ];
    // this.service.patchObject('/resource/SESSION/1/Inactive_32_projects/2013_01', body).subscribe(() => {});
  }

  //[{op: "add", path: "/Project_32_members", value: "p10009"}]
  //[{op: "remove", path: "/Project_32_members/p10009"}]
}
