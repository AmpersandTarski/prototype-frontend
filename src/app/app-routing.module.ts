import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ToolComponentDetailsComponent } from './tools/tool-component-details/tool-component-details.component';
import { ToolGalleryComponent } from './tools/tool-gallery/tool-gallery.component';
import { NotFoundComponentComponent } from './layout/not-found-component/not-found-component.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '404', component: NotFoundComponentComponent },
    ],
  },
  {
    path: 'tools',
    component: AppLayoutComponent,
    children: [
      { path: '', component: ToolGalleryComponent },
      { path: ':componentType/:componentName', component: ToolComponentDetailsComponent },
    ],
  },
  { path: '**', component: AppLayoutComponent, children: [{ path: '', component: NotFoundComponentComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
