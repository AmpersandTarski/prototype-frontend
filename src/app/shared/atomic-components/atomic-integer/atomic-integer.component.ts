import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-integer',
  templateUrl: './atomic-integer.component.html',
  styleUrls: ['./atomic-integer.component.css'],
})
export class AtomicIntegerComponent<T extends string> extends BaseComponent {
  @Input() property!: T | Array<T>;
}
