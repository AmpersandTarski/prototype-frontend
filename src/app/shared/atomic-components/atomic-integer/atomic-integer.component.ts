import { Component } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-integer',
  templateUrl: './atomic-integer.component.html',
  styleUrls: ['./atomic-integer.component.css'],
})
export class AtomicIntegerComponent extends BaseAtomicComponent<number> {}
