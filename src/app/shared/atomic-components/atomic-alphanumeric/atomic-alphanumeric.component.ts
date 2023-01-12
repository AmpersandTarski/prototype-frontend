import { Component, OnInit } from '@angular/core';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { BaseAtomicFormControlComponent } from '../BaseAtomicFormControlComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicFormControlComponent<string> implements OnInit {
  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initNewItemControl(AtomicComponentType.Alphanumeric);
    }
    if (this.isUni) {
      this.initFormControl('blur');
    }
  }
}
