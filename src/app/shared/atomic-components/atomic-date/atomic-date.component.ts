import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AtomicComponentType } from '../../models/atomic-component-types';
import { BaseAtomicFormControlComponent } from '../BaseAtomicFormControlComponent.class';

@Component({
  selector: 'app-atomic-date',
  templateUrl: './atomic-date.component.html',
  styleUrls: ['./atomic-date.component.css'],
})
export class AtomicDateComponent extends BaseAtomicFormControlComponent<string> implements OnInit {
  // Possible formats can be found at https://www.primefaces.org/primeng/calendar.
  // Scroll down to DateFormat for the documentation
  @Input() format: string = 'yy-mm-dd';

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.isUni) {
      this.initNewItemControl(AtomicComponentType.BigAlphanumeric);
    }
    if (this.isUni) {
      this.initFormControl('change', this.formatDate);
    }
  }

  private formatDate(date: string): string {
    let datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yyyy-MM-dd')!;
  }
}
