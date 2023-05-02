import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent<I> extends BaseAtomicComponent<boolean, I> implements OnInit {
  @Output() state = new EventEmitter();
  public formControl!: FormControl<boolean>;
  public formControlArray!: Array<FormControl<boolean>>; // only used for !isUni

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initFormControlArray();
    }
    if (this.isUni) {
      this.initFormControl();
    }
  }

  public getState(): void {
    this.state.emit(this.property);
  }

  private initFormControlArray(): void {
    this.formControlArray = this.data.map(
      (x) => new FormControl<boolean>(x, { nonNullable: true, updateOn: `change` }),
    );
    if (!this.canUpdate()) {
      this.formControlArray.forEach((x) => x.disable());
    }

    if (this.canUpdate()) {
      this.formControlArray.forEach((x) =>
        x.valueChanges.subscribe((x) =>
          this.interfaceComponent
            .patch(this.resource._path_, [
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
        ),
      );
    }
  }

  private initFormControl(): void {
    this.formControl = new FormControl<boolean>(this.data[0], { nonNullable: true, updateOn: `change` });

    if (!this.canUpdate()) {
      this.formControl.disable();
    }

    if (this.canUpdate()) {
      this.formControl.valueChanges.subscribe((x) =>
        this.interfaceComponent
          .patch(this.resource._path_, [
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
}
