import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-datetime',
  templateUrl: './atomic-datetime.component.html',
  styleUrls: ['./atomic-datetime.component.css'],
})
export class AtomicDatetimeComponent extends BaseComponent {
  @Input() property: any | Array<any>;
  public datumpie: Date = new Date('1995-12-17T03:24:00');
  @Input() format: string = 'yy-mm-dd';

  public changed() {
    console.log(this.property);
  }
}
