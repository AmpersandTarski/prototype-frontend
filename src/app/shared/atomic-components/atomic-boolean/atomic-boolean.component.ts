import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent extends BaseAtomicComponent<boolean> implements OnInit {
  @Output() state = new EventEmitter();
  public formControl!: FormControl<boolean>;

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.newItemControl = new FormControl<boolean>(false, { nonNullable: true, updateOn: 'blur' });
    }
    if (this.isUni) {
      this.initFormControl();
    }
    if (!this.canUpdate()) {
      this.formControl.disable();
    }
  }

  public getState(): void {
    this.state.emit(this.property);
  }

  private initFormControl(): void {
    this.formControl = new FormControl<boolean>(this.data[0], { nonNullable: true, updateOn: `blur` });

    if (this.canUpdate()) {
      this.formControl.valueChanges.subscribe((x) =>
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
