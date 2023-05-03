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
import { CoreModule } from './core/core.module';
import { MessageService } from 'primeng/api';
import { ProjectModule } from './generated/project.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppLayoutModule,
    SharedModule,
    CoreModule,
    // ProjectAdministrationModule,
    ProjectModule,
    ToolsModule,
    AdminModule,
    AppRoutingModule,
    ToastModule,
  ],
  providers: [httpInterceptorProviders, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
