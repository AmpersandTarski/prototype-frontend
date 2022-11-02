import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-hugealphanumeric',
  templateUrl: './atomic-hugealphanumeric.component.html',
  styleUrls: ['./atomic-hugealphanumeric.component.css'],
})
export class AtomicHugealphanumericComponent
  extends AtomicComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
