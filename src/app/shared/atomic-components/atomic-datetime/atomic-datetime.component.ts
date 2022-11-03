import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-datetime',
  templateUrl: './atomic-datetime.component.html',
  styleUrls: ['./atomic-datetime.component.css'],
})
export class AtomicDatetimeComponent extends AtomicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
