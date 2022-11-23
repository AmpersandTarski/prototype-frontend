import { Input, Component } from '@angular/core';
import { BaseComponent } from '../../BaseComponent.class';

@Component({
  selector: 'app-atomic-password',
  templateUrl: './atomic-password.component.html',
  styleUrls: ['./atomic-password.component.css'],
})
export class AtomicPasswordComponent extends BaseComponent {
  @Input() property!: string;
}
