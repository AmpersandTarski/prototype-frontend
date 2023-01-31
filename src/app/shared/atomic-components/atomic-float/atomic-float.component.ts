import { Component } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-float',
  templateUrl: './atomic-float.component.html',
  styleUrls: ['./atomic-float.component.css'],
})
export class AtomicFloatComponent<I> extends BaseAtomicComponent<string, I> {}
