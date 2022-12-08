import { Component, EventEmitter, Output } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent extends BaseAtomicComponent<boolean> {
  @Output() state = new EventEmitter();

  getState() {
    this.state.emit(this.property);
  }
}
