import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BoxTableHeaderTemplateDirective } from '../box-table/box-table-header-template.directive';

@Component({
  selector: 'app-box-table-loading',
  templateUrl: './box-table-loading.component.html',
  styleUrls: ['./box-table-loading.component.scss'],
})
export class BoxTableLoadingComponent {
  @Input()
  nrOfRows: number = 5;

  @ContentChild(BoxTableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<unknown>;

  range(size: number, startAt = 0): Array<number> {
    return [...Array(size).keys()].map((i) => i + startAt);
  }
}
