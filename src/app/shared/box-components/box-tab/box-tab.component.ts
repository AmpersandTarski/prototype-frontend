import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-box-tab',
  templateUrl: './box-tab.component.html',
  styleUrls: ['./box-tab.component.scss']
})
export class BoxTabComponent implements OnInit {
  @Input() data: any;
  @Input() tabHeaders: string[] = [];
  @ContentChild('tabContent') tabContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
