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
  formControl!: FormControl<string | null>; // isUni
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });

  // can we use FormControl[] ?
  formArray!: FormArray; // !isUni

  override ngOnInit(): void {
    super.ngOnInit();

    // isUni
    this.formControl = new FormControl(this.data[0], { nonNullable: false, updateOn: 'blur' });
    this.formControl.valueChanges.subscribe((x) =>
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

    // can this be combined with isUni? always use array?
    // !isUni
    this.formArray = new FormArray(
      this.data.map((x) => {
        return new FormControl(x, { nonNullable: false, updateOn: 'blur' });
      }),
    );
    this.formArray.valueChanges.subscribe((x) => console.log(x));

    this.newItemControl.valueChanges.subscribe((x) => console.log(x));
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
