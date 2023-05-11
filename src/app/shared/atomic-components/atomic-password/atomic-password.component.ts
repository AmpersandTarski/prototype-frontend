import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-password',
  templateUrl: './atomic-password.component.html',
  styleUrls: ['./atomic-password.component.css'],
})
export class AtomicPasswordComponent<I> extends BaseAtomicComponent<string, I> implements OnInit {
  public formControl!: FormControl<string>;

  override ngOnInit(): void {
    super.ngOnInit();

    // univalent
    if (this.isUni && this.canUpdate()) {
      this.initFormControl();
    }
  }

  private initFormControl(): void {
    this.formControl = new FormControl<string>(this.data[0], { nonNullable: true });
  }

  // TODO: show notification when it is successful
  public patchPassword(): void {
    let password: string = this.formControl.value;

    this.interfaceComponent
      .patch(this.resource._path_, [
        {
          op: 'replace',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: password === '' ? null : password,
        },
      ])
      .subscribe();
  }
}
