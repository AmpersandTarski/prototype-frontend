import { Component, OnInit } from '@angular/core';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { BaseAtomicFormControlComponent } from '../BaseAtomicFormControlComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicFormControlComponent<string> implements OnInit {
  public placeholder: string = 'Add value';

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initNewItemControl(AtomicComponentType.Alphanumeric);
    }
    if (this.isUni) {
      this.initFormControl('change');
    }
  }

  // Put in BaseAtomicFormControlComponent
  public addAlphanumericItem() {
    // TODO: show warning message?
    if (this.data.some((x: string) => x == this.newItemControl.value)) {
      throw new Error('Value already exists');
    } else {
      this.resource
        .patch([
          {
            op: 'add',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: this.newItemControl.value,
          },
        ])
        .subscribe();
      this.data.push(this.newItemControl.value as string);
      this.newItemControl.setValue('');
    }
  }

  public removeAlphanumericItem(index: number) {
    this.resource
      .patch([
        {
          op: 'remove',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: this.data[index],
        },
      ])
      .subscribe();
    this.data.splice(index, 1);
  }
}
