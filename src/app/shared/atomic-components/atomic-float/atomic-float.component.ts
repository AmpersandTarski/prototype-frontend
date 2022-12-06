import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-float',
  templateUrl: './atomic-float.component.html',
  styleUrls: ['./atomic-float.component.css'],
})
export class AtomicFloatComponent<T> extends BaseComponent {
  @Input() property!: T | Array<T>;
}
