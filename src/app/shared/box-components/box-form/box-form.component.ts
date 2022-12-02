import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent {
  @ContentChild('components') components!: TemplateRef<any>;
}
