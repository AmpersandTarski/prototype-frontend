import { Component, Input, OnInit } from '@angular/core';
import { InterfaceComponent } from '../InterfaceComponent.class';
@Component({
    template: ''
  })
export abstract class AtomicComponent extends InterfaceComponent implements OnInit {
    @Input('isUni') isUni: any;
    ngOnInit(): void {
        this.exprIsUni = this.isUni !== undefined;
        console.log(`Boolean isUni is ${this.exprIsUni ? '' : 'non-'}present!`);
      }
}
