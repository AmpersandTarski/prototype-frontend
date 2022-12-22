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

  formControl!: FormControl<boolean | null>;
  newItemControl: FormControl<boolean> = new FormControl<boolean>(false, {
    nonNullable: true,
    updateOn: 'change',
  });

  override ngOnInit(): void {
    super.ngOnInit();
    this.formControl = new FormControl(this.data[0], { nonNullable: false, updateOn: 'blur' });
    if (!this.canUpdate()) {
      this.formControl.disable();
    }
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

  public getState() {
    this.state.emit(this.property);
  }
}
