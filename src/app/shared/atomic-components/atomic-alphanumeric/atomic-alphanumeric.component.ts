import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent extends BaseAtomicComponent<string> implements OnInit {
  public formControl!: FormControl<string>;

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni && this.canUpdate()) {
      this.initNewItemControl(AtomicComponentType.Alphanumeric);
    }
    if (this.isUni) {
      this.initFormControl();
    }
  }

  private initFormControl(): void {
    this.formControl = new FormControl<string>(this.data[0], { nonNullable: true, updateOn: `blur` });

    if (this.canUpdate()) {
      this.formControl.valueChanges
        .pipe(map((x) => (x === '' ? null : x))) // transform empty string to null value
        .subscribe((x) =>
          this.resource
            .patch([
              {
                op: 'replace',
                path: this.propertyName, // FIXME: this must be relative to path of this.resource
                value: x,
              },
            ])
            .subscribe((x) => {
              if (!(x.invariantRulesHold && x.isCommitted)) {
                // TODO: show warning message of x.notifications.invariants
              }
            }),
        );
    }
  }
}
