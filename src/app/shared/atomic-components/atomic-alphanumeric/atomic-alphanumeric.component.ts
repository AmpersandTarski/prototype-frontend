import { Component, OnInit } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> implements OnInit {
  // make generic and put in BaseAtomicComponent class
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });
  formArray!: FormArray;

  override ngOnInit(): void {
    super.ngOnInit();

    this.mapToFormArray();
  }

  mapToFormArray() {
    if (this.isUni) {
      this.formArray = new FormArray([new FormControl(this.data[0], { nonNullable: false, updateOn: 'blur' })]);
      this.formArray.valueChanges.subscribe((x) =>
        this.resource
          .patch([
            {
              op: 'replace',
              path: this.propertyName, // FIXME: this must be relative to path of this.resource
              value: x,
            },
          ])
          .subscribe(),
      );
    }

    if (!this.isUni) {
      this.formArray = new FormArray(
        this.data.map((x) => {
          return new FormControl(x, { nonNullable: false, updateOn: 'blur' });
        }),
      );
      this.formArray.valueChanges.subscribe((x) => console.log(x));

      this.newItemControl.valueChanges.subscribe((x) => console.log(x));
    }
  }

  addAlphanumericItem() {
    // TODO: patch method with try catch?
    this.formArray.push(this.newItemControl);
    console.log(this.formArray);
    this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });
  }

  deleteAlphanumericItem(index: number) {
    // TODO: delete method with try catch?
    this.formArray.removeAt(index);
  }

  // TODO: look for other solution
  transform(something: unknown): FormControl {
    return something as FormControl;
  }
}
