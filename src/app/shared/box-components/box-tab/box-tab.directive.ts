import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tab]',
})
export class BoxTabDirective {
  @Input() tab!: string;
  @Input('tabName') name?: string;
  constructor(public readonly template: TemplateRef<unknown>) {}
}
