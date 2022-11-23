import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent extends BaseComponent {
  @Input() property!: any | Array<any>;
  @Output() state = new EventEmitter();

  getState() {
    this.state.emit(this.property);
  }
}
