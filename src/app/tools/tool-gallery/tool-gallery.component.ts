import { Component, OnInit } from '@angular/core';
import { testdata } from '../../project-administration/active-projects/testdata';

@Component({
  selector: 'app-tool-gallery',
  templateUrl: './tool-gallery.component.html',
  styleUrls: ['./tool-gallery.component.scss']
})
export class ToolGalleryComponent implements OnInit {
  
  activeProjects = testdata[0];

  constructor() { }

  ngOnInit(): void {
  }

}
