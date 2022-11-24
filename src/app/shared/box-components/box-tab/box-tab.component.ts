import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-box-tab',
  templateUrl: './box-tab.component.html',
  styleUrls: ['./box-tab.component.scss'],
})
export class BoxTabComponent {
  @Input() data: any;
  @Input() tabHeaders: string[] = [];
  @ContentChild('tabContent') tabContent!: TemplateRef<any>;

  constructor() {}
}
