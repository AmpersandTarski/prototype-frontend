import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicAlphanumericComponent<I> extends BaseAtomicComponent<string, I> implements OnInit {
  public formControl!: FormControl<string>;

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni && this.canUpdate()) {
      this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });
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
          this.interfaceComponent
            .patch(this.resource, [
              {
                op: 'replace',
                path: this.propertyName, // FIXME: this must be relative to path of this.resource
                value: x,
              },
            ])
            .subscribe({
              error: (err: HttpErrorResponse) => {
                super.addMessage({
                  severity: 'error',
                  summary: err.status.toString(),
                  detail: err.message,
                });
              },
              complete: () => {
                super.addMessage({
                  severity: 'success',
                  summary: 'Successfully updated form.',
                });
              },
            }),
        );
    }
  }
}
