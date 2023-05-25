import { Directive, Input } from '@angular/core';

interface BoxTableHeaderTemplateContext<TItem extends object> {
  $implicit: TItem[];
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
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
