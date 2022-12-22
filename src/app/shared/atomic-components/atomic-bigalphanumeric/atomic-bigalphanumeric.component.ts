import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-bigalphanumeric',
  templateUrl: './atomic-bigalphanumeric.component.html',
  styleUrls: ['./atomic-bigalphanumeric.component.css'],
})
export class AtomicBigalphanumericComponent extends BaseAtomicComponent<string> {
  formControl!: FormControl<string | null>;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'blur' });

  // TODO: make FormGroup for when !isUni

  override ngOnInit(): void {
    super.ngOnInit();
    this.formControl = new FormControl(this.data[0], { nonNullable: false, updateOn: 'blur' });

    this.formControl.valueChanges.subscribe(
      (x) =>
        this.resource
          .patch([
            {
              op: 'replace',
              path: this.propertyName, // FIXME: this must be relative to path of this.resource
              value: x,
            },
          ])
          .subscribe(),
      // .subscribe(() => this.resource.data$.subscribe((x: any) => console.log(x))),
    );
  }
}
