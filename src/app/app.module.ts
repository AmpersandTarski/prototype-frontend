import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AtomicALPHANUMERICComponent } from './atomic-alphanumeric/atomic-alphanumeric.component';
import { AtomicBIGALPHANUMERICComponent } from './atomic-bigalphanumeric/atomic-bigalphanumeric.component';
import { AtomicBOOLEANComponent } from './atomic-boolean/atomic-boolean.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomicALPHANUMERICComponent,
    AtomicBIGALPHANUMERICComponent,
    AtomicBOOLEANComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    SkeletonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
