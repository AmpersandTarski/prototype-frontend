import { Directive, Input } from '@angular/core';

interface BoxRawTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  selector: 'ng-template[boxRawTemplate]',
})
export class BoxRawTemplateDirective<TItem extends object> {
  @Input('boxRawTemplate') data!: TItem[] | '';

  // This context guard provides type hinting when using template directive
  // To understand why/how: https://www.youtube.com/watch?v=dau7kQMdH4A
  static ngTemplateContextGuard<TContextItem extends object>(
    dir: BoxRawTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is BoxRawTemplateContext<TContextItem> {
    return true;
  }
}
