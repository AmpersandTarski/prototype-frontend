import { Component, Input, OnInit } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { Resource } from '../../interfacing/resource.interface';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> implements OnInit {
  formControl!: FormControl<string | null>;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });

  @Input()
  // The type of the T for Resource<T> is not relevant nor to determine here; therefore unknow
  // We require a Resource, that implements the required methods (like patch)
  // Most likely this is a top-level component for a specific application interface (e.g. ProjectComponent)
  resource!: Resource<unknown>; // TODO move to the base class. It is needed for all atomic components

  @Input()
  propertyName!: string; // TODO move to the base class. It is needed for all atomic components

  override ngOnInit(): void {
    super.ngOnInit();
    this.formControl = new FormControl(this.data[0], { nonNullable: false, updateOn: 'blur' });

    this.formControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((x) => (x === '' ? null : x)), // transform empty string to null value
      )
      .subscribe((x) =>
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
