import { Component, ContentChild, TemplateRef } from '@angular/core';
import { ObjectBase } from '../../objectBase.interface';
import { BaseBoxComponent } from '../BaseBoxComponent.class';
import { BoxTableHeaderTemplateDirective } from './box-table-header-template.directive';
import { BoxTableRowTemplateDirective } from './box-table-row-template.directive';

@Component({
  selector: 'app-box-table',
  templateUrl: './box-table.component.html',
  styleUrls: ['./box-table.component.css'],
})
export class BoxTableComponent<TItem extends ObjectBase, I> extends BaseBoxComponent<TItem, I> {
  @ContentChild(BoxTableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<unknown>;
  @ContentChild(BoxTableRowTemplateDirective, { read: TemplateRef })
  rows?: TemplateRef<unknown>;
}
