import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AtomicComponentType } from '../models/atomic-component-types';
import { BaseAtomicComponent } from './BaseAtomicComponent.class';

@Component({
  template: '',
})
export abstract class BaseAtomicFormControlComponent<T> extends BaseAtomicComponent<T> implements OnInit {
  public formControl!: FormControl<T>;

  public initFormControl(updateOn: 'change' | 'blur', formatValue?: (x: T) => string) {
    // Add isTot rules
    this.formControl = new FormControl<T>(this.data[0], { nonNullable: true, updateOn: updateOn });
    this.formControl.valueChanges.subscribe((x) =>
      this.resource
        .patch([
          {
            op: 'replace',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: typeof formatValue == 'undefined' ? x : formatValue(x),
          },
        ])
        .subscribe(),
    );
  }
}
