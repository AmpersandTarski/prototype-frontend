import { Component, ContentChild, TemplateRef } from '@angular/core';
import { ObjectBase } from '../../objectBase.interface';
import { BaseBoxComponent } from '../BaseBoxComponent.class';
import { BoxRawTemplateDirective } from './box-raw-template.directive';

@Component({
  selector: 'app-box-raw',
  templateUrl: './box-raw.component.html',
  styleUrls: ['./box-raw.component.scss'],
})
export class BoxRawComponent<TItem extends ObjectBase, I> extends BaseBoxComponent<TItem, I> {
  @ContentChild(BoxRawTemplateDirective, { read: TemplateRef })
  template?: TemplateRef<unknown>;
}
