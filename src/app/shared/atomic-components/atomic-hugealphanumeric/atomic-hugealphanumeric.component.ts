import { Component } from '@angular/core';
import { BaseAtomicComponent } from '../BaseAtomicComponent.class';

@Component({
  selector: 'app-atomic-hugealphanumeric',
  templateUrl: './atomic-hugealphanumeric.component.html',
  styleUrls: ['./atomic-hugealphanumeric.component.css'],
})
export class AtomicHugealphanumericComponent<I> extends BaseAtomicComponent<string, I> {}
