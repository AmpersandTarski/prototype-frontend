import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-integer',
  templateUrl: './atomic-integer.component.html',
  styleUrls: ['./atomic-integer.component.css'],
})
export class AtomicIntegerComponent extends AtomicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
