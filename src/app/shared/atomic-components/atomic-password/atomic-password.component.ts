import { Attribute, Input, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AtomicComponent } from '../AtomicComponent.class';

@Component({
  selector: 'app-atomic-password',
  templateUrl: './atomic-password.component.html',
  styleUrls: ['./atomic-password.component.css']
})
export class AtomicPasswordComponent extends AtomicComponent {
  @Input() property!: string;

  constructor() { 
    super();        
  }
}
