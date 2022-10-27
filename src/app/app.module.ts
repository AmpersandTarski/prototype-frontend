import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber'
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AtomicALPHANUMERICComponent } from './atomic-alphanumeric/atomic-alphanumeric.component';
import { AtomicBIGALPHANUMERICComponent } from './atomic-bigalphanumeric/atomic-bigalphanumeric.component';
import { AtomicBOOLEANComponent } from './atomic-boolean/atomic-boolean.component';
import { AtomicINTEGERComponent } from './atomic-integer/atomic-integer.component';
import { AtomicHUGEALPHANUMERICComponent } from './atomic-hugealphanumeric/atomic-hugealphanumeric.component';
import { AtomicFLOATComponent } from './atomic-float/atomic-float.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomicALPHANUMERICComponent,
    AtomicBIGALPHANUMERICComponent,
    AtomicBOOLEANComponent,
    AtomicINTEGERComponent,
    AtomicHUGEALPHANUMERICComponent,
    AtomicFLOATComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
    FormsModule,
    SkeletonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
