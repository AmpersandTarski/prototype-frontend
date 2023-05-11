import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-integer',
  templateUrl: './atomic-integer.component.html',
  styleUrls: ['./atomic-integer.component.css'],
})
export class AtomicIntegerComponent<I> extends BaseAtomicComponent<number, I> implements OnInit {
  public formControl!: FormControl<number>;

  override ngOnInit(): void {
    super.ngOnInit();

    // univalent
    if (this.isUni && this.canUpdate()) {
      this.initFormControl();
    }

    // not univalent
    if (!this.isUni && this.canUpdate()) {
      this.newItemControl = new FormControl<number>(0, { nonNullable: true, updateOn: 'change' });
    }
  }

  private initFormControl(): void {
    this.formControl = new FormControl<number>(this.data[0], { nonNullable: true, updateOn: 'blur' });

    this.formControl.valueChanges.subscribe((x) =>
      this.interfaceComponent
        .patch(this.resource._path_, [
          {
            op: 'replace',
            path: this.propertyName, // FIXME
            value: x,
          },
        ])
        .subscribe(),
    );
  }
}
