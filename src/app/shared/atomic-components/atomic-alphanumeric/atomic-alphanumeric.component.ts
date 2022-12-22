import { Component, OnInit } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> implements OnInit {
  // make generic and put in BaseAtomicComponent class
  formControl!: FormControl<string | null>;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });

  override ngOnInit(): void {
    super.ngOnInit();
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
  }
}
