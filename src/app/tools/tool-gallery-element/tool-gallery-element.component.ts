import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tool-gallery-element',
  templateUrl: './tool-gallery-element.component.html',
  styleUrls: ['./tool-gallery-element.component.scss']
})
export class ToolGalleryElementComponent implements OnInit {
  @Input() titleHeader: string = "";
  @Input() subHeader: string = "";
  @ContentChild('header') header: TemplateRef<any> | undefined;
  @ContentChild('body') body: TemplateRef<any> | undefined;
  @ContentChild('footer') footer: TemplateRef<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
