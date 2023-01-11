import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { BaseAtomicFormControlComponent } from '../BaseAtomicFormControlComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent extends BaseAtomicFormControlComponent<boolean> implements OnInit {
  @Output() state = new EventEmitter();

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initNewItemControl(AtomicComponentType.Boolean);
    }
    if (this.isUni) {
      this.initFormControl('blur');
    }
  }

  public getState() {
    this.state.emit(this.property);
  }
}
