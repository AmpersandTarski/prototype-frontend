import { Component } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> {
  newItem!: string;

  isNewItemInputRequired() {
    return this.isTot && this.property?.length === 0;
  }
}
