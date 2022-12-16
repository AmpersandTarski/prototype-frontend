import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  public onDateChange(date: Date): void {
    console.log(date);
    let datePipe: DatePipe = new DatePipe('en-US');
    this.property = datePipe.transform(date, 'yyyy-MM-dd');
  }
}
