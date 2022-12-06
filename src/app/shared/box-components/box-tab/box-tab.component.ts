import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { BoxTableComponent } from '../box-table/box-table.component';

@Component({
  selector: 'app-box-tab',
  templateUrl: './box-tab.component.html',
  styleUrls: ['./box-tab.component.scss']
})
export class BoxTabComponent<T> implements OnInit {
  @Input() data: T | undefined;
  @Input() tabHeaders: string[] = [];
  @ContentChild('tabContent') tabContent!: TemplateRef<BoxTableComponent<T>>;

  constructor() { }

  ngOnInit(): void {
  }

}
