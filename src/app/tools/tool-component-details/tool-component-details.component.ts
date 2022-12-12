import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { testdata } from '../../project-administration/active-projects/testdata';

@Component({
  selector: 'app-tool-component-details',
  templateUrl: './tool-component-details.component.html',
  styleUrls: ['./tool-component-details.component.scss'],
})
export class ToolComponentDetailsComponent implements OnInit {
  public componentType?: string | null;
  public componentName?: string | null;
  public component?: object | null;

  public canCreate: boolean = true;
  public canRead: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;

  public isUni: boolean = true;
  public isTot: boolean = true;

  activeProjects = testdata[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentName = params.get('componentName');
      this.componentType = params.get('componentType');
    });
  }

  setCanCreateState(canCreate: boolean) {
    this.canCreate = canCreate;
  }

  setCanReadState(canRead: boolean) {
    this.canRead = canRead;
  }

  setCanUpdateState(canUpdate: boolean) {
    this.canUpdate = canUpdate;
  }

  setCanDeleteState(canDelete: boolean) {
    this.canDelete = canDelete;
  }

  setIsUniState(isUni: boolean) {
    this.isUni = isUni;
  }

  setIsTotState(isTot: boolean) {
    this.isTot = isTot;
  }

  public crudOperationsToText(): string {
    var c = 'c';
    var r = 'r';
    var u = 'u';
    var d = 'd';

    if (this.canCreate) {
      c = c.toUpperCase();
    }
    if (this.canRead) {
      r = r.toUpperCase();
    }
    if (this.canUpdate) {
      u = u.toUpperCase();
    }
    if (this.canDelete) {
      d = d.toUpperCase();
    }

    return c + r + u + d;
  }
}
