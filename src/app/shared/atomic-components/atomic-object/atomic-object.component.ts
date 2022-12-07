import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atomic-object',
  templateUrl: './atomic-object.component.html',
  styleUrls: ['./atomic-object.component.scss'],
})
export class AtomicObjectComponent extends BaseAtomicComponent<any> implements OnInit {
  public id!: string;
  public ifcs!: Array<any>;
  public label!: string;
  public menu!: Array<MenuItem>;

  constructor(private router: Router) {
    super();
  }

  public navigateToEntity(type: string, id: string) {
    this.router.navigate(['p', type.toLowerCase(), `${id}`]);
  }

  override ngOnInit(): void {
    this.id = this.property._id_;
    this.ifcs = this.property._ifcs_;
    this.label = this.property._label_;
    this.menu = this.toPrimeNgMenuModel(this.ifcs, this.id);
  }

  private toPrimeNgMenuModel(ifcs: Array<any>, id: string): Array<MenuItem> {
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
