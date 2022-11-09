import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-bigalphanumeric',
  templateUrl: './atomic-bigalphanumeric.component.html',
  styleUrls: ['./atomic-bigalphanumeric.component.css'],
})
export class AtomicBigalphanumericComponent
  extends AtomicComponent
{
  @Input() property!: string | Array<string>;

  constructor() {
    super();
  }
}
