import { Component, ContentChildren, QueryList } from '@angular/core';
import { ObjectBase } from '../../objectBase.interface';
import { BaseBoxComponent } from '../BaseBoxComponent.class';
import { BoxTabDirective } from './box-tab.directive';

@Component({
  selector: 'app-box-tab',
  templateUrl: './box-tab.component.html',
  styleUrls: ['./box-tab.component.scss'],
})
export class BoxTabComponent<TItem extends ObjectBase, I> extends BaseBoxComponent<TItem, I> {
  @ContentChildren(BoxTabDirective) tabs!: QueryList<BoxTabDirective>;

  // TODO: fix this ugly any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public asObjectBase(val: any, name: string): ObjectBase {
    return val[name] as ObjectBase;
  }
}
