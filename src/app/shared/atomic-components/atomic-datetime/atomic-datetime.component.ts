import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-datetime',
  templateUrl: './atomic-datetime.component.html',
  styleUrls: ['./atomic-datetime.component.css'],
})
export class AtomicDatetimeComponent extends BaseAtomicComponent<string> {
  // Possible formats can be found at https://www.primefaces.org/primeng/calendar.
  // Scroll down to DateFormat for the documentation
  @Input() format: string = 'yy-mm-dd';

  public onDateChange(date: Date): void {
    let datePipe: DatePipe = new DatePipe('en-US');
    this.property = datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
