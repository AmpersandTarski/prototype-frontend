import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BaseBoxComponent } from '../BaseBoxComponent.class';

@Component({
  selector: 'app-box-tab',
  templateUrl: './box-tab.component.html',
  styleUrls: ['./box-tab.component.scss'],
})
export class BoxTabComponent<I> extends BaseBoxComponent<I> {
  @Input() data: any;
  @Input() tabHeaders: string[] = [];
  @ContentChild('tabContent') tabContent!: TemplateRef<any>;

  constructor() {
    super();
  }
}
