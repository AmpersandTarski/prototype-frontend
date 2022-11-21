import { Component, ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';

interface BoxTableHeaderTemplateContext<TItem extends object> {
  $implicit: TItem[];
}

@Directive({
  selector: 'ng-template[boxTableHeader]',
})
export class BoxTableHeaderTemplateDirective<TItem extends object> {
  @Input('boxTableHeader') data!: TItem[] | '';

  // This context guard provides type hinting when using template directive
  // To understand why/how: https://www.youtube.com/watch?v=dau7kQMdH4A
  static ngTemplateContextGuard<TContextItem extends object>(
    dir: BoxTableHeaderTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is BoxTableHeaderTemplateContext<TContextItem> {
    return true;
  }
}

interface BoxTableRowTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  selector: 'ng-template[boxTableRow]',
})
export class BoxTableRowTemplateDirective<TItem extends object> {
  @Input('boxTableRow') data!: TItem[];

  // This context guard provides type hinting when using template directive
  // To understand why/how: https://www.youtube.com/watch?v=dau7kQMdH4A
  static ngTemplateContextGuard<TContextItem extends object>(
    dir: BoxTableRowTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is BoxTableRowTemplateContext<TContextItem> {
    return true;
  }
}

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
