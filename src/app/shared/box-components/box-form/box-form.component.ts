import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BoxFormTemplateDirective } from './box-form-template.directive';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent<TItem extends object> {
  @Input() data!: TItem[];
  @ContentChild(BoxFormTemplateDirective, { read: TemplateRef })
  template?: TemplateRef<unknown>;
}
