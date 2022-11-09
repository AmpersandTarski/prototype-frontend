import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-float',
  templateUrl: './atomic-float.component.html',
  styleUrls: ['./atomic-float.component.css'],
})
export class AtomicFloatComponent extends AtomicComponent {
  constructor() {
    super();
  }
}
