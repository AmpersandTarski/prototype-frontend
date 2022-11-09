import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-boolean',
  templateUrl: './atomic-boolean.component.html',
  styleUrls: ['./atomic-boolean.component.css'],
})
export class AtomicBooleanComponent extends AtomicComponent {
  constructor() {
    super();
  }
}
