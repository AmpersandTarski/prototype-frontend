import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-date',
  templateUrl: './atomic-date.component.html',
  styleUrls: ['./atomic-date.component.css'],
})
export class AtomicDateComponent extends AtomicComponent {
  constructor() {
    super();
  }
}
