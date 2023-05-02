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

  public createItem(): void {
    const str = this.data[0]._path_;
    const lastIndex = str.lastIndexOf('/');
    // removes the section after the last "/"
    const formattedStr = str.substring(0, lastIndex);

    this.interfaceComponent.post(formattedStr).subscribe((x) => {
      if (x.isCommitted && x.invariantRulesHold) {
        this.data.unshift(x.content as TItem);
      }
    });
  }
}
