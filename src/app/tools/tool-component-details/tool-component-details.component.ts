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

  public crudOperationsToText(): string {
    return [
      this.canCreate ? 'C' : 'c',
      this.canRead ? 'R' : 'r',
      this.canUpdate ? 'U' : 'u',
      this.canDelete ? 'D' : 'd',
    ].reduce((str: string, value: string) => str + value, '');
  }
}
