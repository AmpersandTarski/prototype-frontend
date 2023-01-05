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
              value: x[0],
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
    }
  }

  addAlphanumericItem() {
    // TODO: show warning message?
    if (this.formArray.value.some((x: string) => x == this.newItemControl.value)) {
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
      this.formArray.push(this.newItemControl);
      this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });
    }
  }

  removeAlphanumericItem(index: number) {
    this.resource
      .patch([
        {
          op: 'remove',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: this.formArray.controls[index].value,
        },
      ])
      .subscribe();
    this.formArray.removeAt(index);
  }

  // TODO: look for other solution
  transform(something: unknown): FormControl {
    return something as FormControl;
  }
}
