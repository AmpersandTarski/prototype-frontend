import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css'],
})
export class AtomicALPHANUMERICComponent
  extends AtomicComponent
  implements OnInit
{
  @Input() property!: string | Array<string>;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
