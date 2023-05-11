import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-date',
  templateUrl: './atomic-date.component.html',
  styleUrls: ['./atomic-date.component.css'],
})
export class AtomicDateComponent<I> extends BaseAtomicComponent<string, I> implements OnInit {
  // Possible formats can be found at https://www.primefaces.org/primeng/calendar.
  // Scroll down to DateFormat for the documentation
  @Input() format: string = 'dd/mm/yy';
  public formControl!: FormControl<Date | string>;
  public dates!: string[]; // this.data, but with a formatted date for readability

  override ngOnInit(): void {
    super.ngOnInit();

    // readonly
    if (!this.canUpdate()) {
      // formats the dates to a readable format
      this.dates = this.data.map((x) => new Date(x).toLocaleDateString());
    }

    // univalent
    if (this.isUni && this.canUpdate()) {
      this.formControl = new FormControl<Date | string>(this.data.length ? new Date(this.data[0]) : '', {
        nonNullable: true,
        updateOn: `change`,
      });
    }

    // not univalent
    if (!this.isUni && this.canUpdate()) {
      this.dates = this.data.map((x) => new Date(x).toLocaleDateString());
      this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });
    }
  }

  public override addItem() {
    // TODO: show warning message when item already exists?
    // if (this.data.some((x: T) => x == (this.newItemControl.value as unknown))) {
    //   // the warning message
    // }

    let val: string = this.newItemControl.value as string;

    if (val) {
      this.interfaceComponent
        .patch(this.resource._path_, [
          {
            op: 'add',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: val,
          },
        ])
        .subscribe((x) => {
          if (x.isCommitted && x.invariantRulesHold) {
            if (this.isUni) {
              this.newItemControl.disable();
            }
            this.dates.push(new Date(val).toLocaleDateString());
            this.newItemControl.setValue('');
          }
        });
    }
  }

  public patchDate(): void {
    if (this.formControl.value != '') {
      let date: Date = this.formControl.value as Date;
      // the date isn't formatting correctly due to a wrong timezone so use this fix
      let timezoneOffset = date.getTimezoneOffset() * 60000;
      let formattedDate: Date = new Date(date.getTime() - timezoneOffset);

      this.interfaceComponent
        .patch(this.resource._path_, [
          {
            op: 'replace',
            path: this.propertyName, // FIXME: this must be relative to path of this.resource
            value: formattedDate,
          },
        ])
        .subscribe();
    }
  }
}
