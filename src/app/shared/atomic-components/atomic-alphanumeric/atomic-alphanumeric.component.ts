import { Component, Input } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { Resource } from '../../interfacing/resource.interface';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> {
  value!: FormControl<string | null>;
  newItem: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  @Input()
  resource!: Resource<any>;

  @Input()
  propertyName!: string;

  isNewItemInputRequired() {
    return this.isTot && this.property?.length === 0;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.value = new FormControl(this.requireArray(this.property)[0], {nonNullable: false});
    this.value.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(x => x === '' ? null : x), // transform empty string to null value
        tap(x => console.log(x)), // TODO: remove this line
      )
      .subscribe(
        x => this.resource.patch([{
          op: 'replace',
          path: this.propertyName,
          value: x,
        }]).subscribe()
      );
  }
}
