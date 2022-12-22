import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-date',
  templateUrl: './atomic-date.component.html',
  styleUrls: ['./atomic-date.component.css'],
})
export class AtomicDateComponent extends BaseAtomicComponent<string> {
  // Possible formats can be found at https://www.primefaces.org/primeng/calendar.
  // Scroll down to DateFormat for the documentation
  @Input() format: string = 'yy-mm-dd';

  formControl!: FormControl<string | null>;
  newItemControl: FormControl<string> = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });

  override ngOnInit(): void {
    super.ngOnInit();
    this.formControl = new FormControl(this.data[0], { nonNullable: false, updateOn: 'change' });

    this.formControl.valueChanges.subscribe((x) =>
      this.resource
        .patch([
          {
            op: 'replace',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: this.formatDate(x!),
          },
        ])
        .subscribe(),
    );
  }

  public formatDate(date: string): string {
    let datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yyyy-MM-dd')!;
  }
}
