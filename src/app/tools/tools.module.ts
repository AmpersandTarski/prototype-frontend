import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ToolGalleryComponent } from './tool-gallery/tool-gallery.component';
import { ToolGalleryElementComponent } from './tool-gallery-element/tool-gallery-element.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [ToolGalleryComponent, ToolGalleryElementComponent],
    imports: [
        CommonModule,
        SharedModule,
        CardModule,
        ButtonModule,
    ],
})
export class ToolsModule { }