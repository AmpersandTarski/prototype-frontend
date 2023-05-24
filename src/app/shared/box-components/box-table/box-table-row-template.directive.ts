import { Directive, Input } from '@angular/core';

interface BoxTableRowTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
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
