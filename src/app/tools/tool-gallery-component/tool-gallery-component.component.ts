import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tool-gallery-component',
  templateUrl: './tool-gallery-component.component.html',
  styleUrls: ['./tool-gallery-component.component.scss']
})
export class ToolGalleryComponentComponent implements OnInit {
  @Input() titleHeader: string = "";
  @Input() subHeader: string = "";
  @ContentChild('header') header: TemplateRef<unknown> | undefined;
  @ContentChild('body') body: TemplateRef<unknown> | undefined;
  @ContentChild('footer') footer: TemplateRef<unknown> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
