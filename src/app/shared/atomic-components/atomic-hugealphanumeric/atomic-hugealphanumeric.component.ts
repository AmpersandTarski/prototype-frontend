import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-hugealphanumeric',
  templateUrl: './atomic-hugealphanumeric.component.html',
  styleUrls: ['./atomic-hugealphanumeric.component.css'],
})
export class AtomicHugealphanumericComponent<T extends String> extends BaseComponent {
  @Input() property!: T | Array<T>;
}
