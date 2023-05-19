import { Directive, Input } from '@angular/core';

interface BoxFormTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[boxFormTemplate]',
})
export class BoxFormTemplateDirective<TItem extends object> {
  @Input('boxFormTemplate') data!: TItem[] | '';

  // This context guard provides type hinting when using template directive
  // To understand why/how: https://www.youtube.com/watch?v=dau7kQMdH4A
  static ngTemplateContextGuard<TContextItem extends object>(
    dir: BoxFormTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is BoxFormTemplateContext<TContextItem> {
    return true;
  }
}
