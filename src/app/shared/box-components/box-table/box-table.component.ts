import { Component, ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[boxTableHeader]',
})
export class BoxTableHeaderTemplateDirective {}

@Directive({
  selector: 'ng-template[boxTableRow]',
})
export class BoxTableRowTemplateDirective {}

@Component({
  selector: 'app-box-table',
  templateUrl: './box-table.component.html',
  styleUrls: ['./box-table.component.css'],
})
export class BoxTableComponent<TItem extends object> implements OnInit {
  @Input() data!: TItem[];
  @ContentChild(BoxTableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<any>;
  @ContentChild(BoxTableRowTemplateDirective, { read: TemplateRef })
  rows?: TemplateRef<any>;

  ngOnInit(): void {}
}
