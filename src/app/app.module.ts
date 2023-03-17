import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './backend/http-interceptors';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProjectAdministrationModule } from './project-administration/project-administration.module';
import { SharedModule } from './shared/shared.module';
import { ToolsModule } from './tools/tools.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppLayoutModule,
    SharedModule,
    ProjectAdministrationModule,
    ToolsModule,
    AdminModule,
    AppRoutingModule,
    ToastModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
