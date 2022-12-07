import { Component } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-bigalphanumeric',
  templateUrl: './atomic-bigalphanumeric.component.html',
  styleUrls: ['./atomic-bigalphanumeric.component.css'],
})
export class AtomicBigalphanumericComponent extends BaseAtomicComponent<string> {
  newItem!: string;

  isNewItemInputRequired() {
    return this.isTot && this.property?.length === 0;
  }
}
