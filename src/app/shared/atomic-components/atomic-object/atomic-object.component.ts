import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  public placeholder!: string;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });

  constructor(private router: Router, private service: BackendService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.data.forEach((object) => {
      this.menuItems[object._id_] = this.toPrimeNgMenuModel(object._ifcs_, object._id_);
    });

    if (this.canUpdate()) {
      if (this.isUni && this.data.length > 0) return;
      this.alternativeObjects$ = this.getPatchItems();
    }

    this.newItemControl.valueChanges.subscribe((x: ObjectBase | string) => {
      if (x == '') return;
      const y = x as ObjectBase;

      return this.resource
        .patch([
          {
            op: 'add',
            path: this.propertyName,
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
    return this.service.getPeople(); //TODO make generic
  }

  public remove(fieldName: string, object: ObjectBase, patchResource: unknown) {
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
