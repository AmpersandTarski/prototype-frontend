import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ObjectBase } from '../../objectBase.interface';
import { BaseBoxComponent } from '../BaseBoxComponent.class';
import { BoxFormTemplateDirective } from './box-form-template.directive';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent<TItem extends ObjectBase, I> extends BaseBoxComponent<TItem, I> {
  @ContentChild(BoxFormTemplateDirective, { read: TemplateRef })
  template?: TemplateRef<unknown>;
}
