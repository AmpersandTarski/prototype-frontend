import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseComponent {
  @Input() property!: string | Array<string>;
  newItem!: string;

  isNewItemInputRequired() {
    if (this.exprIsTot) {
      if (this.property.length === 0) {
        return true;
      }
    }
    return false;
  }
}
