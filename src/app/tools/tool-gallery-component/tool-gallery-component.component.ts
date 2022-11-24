import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tool-gallery-component',
  templateUrl: './tool-gallery-component.component.html',
  styleUrls: ['./tool-gallery-component.component.scss'],
})
export class ToolGalleryComponentComponent {
  @Input() titleHeader: string = '';
  @Input() subHeader: string = '';
  @ContentChild('header') header: TemplateRef<any> | undefined;
  @ContentChild('body') body: TemplateRef<any> | undefined;
  @ContentChild('footer') footer: TemplateRef<any> | undefined;

  constructor() {}
}
