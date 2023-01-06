import { Component, OnInit } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> implements OnInit {
  public placeholder: string = 'Add value';
  // make generic and put in BaseAtomicComponent class
  public formControl!: FormControl<string>;
  public newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });

  override ngOnInit(): void {
    super.ngOnInit();
    this.initFormControl();
  }

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
      this.data.push(this.newItemControl.value);
      this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });
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

  private initFormControl() {
    this.formControl = new FormControl<string>(this.data[0], { nonNullable: true, updateOn: 'blur' });
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
