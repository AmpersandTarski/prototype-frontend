import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ToolGalleryComponent } from './tool-gallery/tool-gallery.component';
import { ToolGalleryComponentComponent } from './tool-gallery-component/tool-gallery-component.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolComponentDetailsComponent } from './tool-component-details/tool-component-details.component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@NgModule({
    declarations: [ToolGalleryComponent, ToolGalleryComponentComponent, ToolComponentDetailsComponent],
    imports: [
        CommonModule,
        SharedModule,
        CardModule,
        ButtonModule,
        RouterModule,
        DividerModule
    ],
})
export class ToolsModule { }