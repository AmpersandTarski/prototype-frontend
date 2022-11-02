import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicALPHANUMERICComponent } from './atomic-components/atomic-alphanumeric/atomic-alphanumeric.component';
import { AtomicBIGALPHANUMERICComponent } from './atomic-components/atomic-bigalphanumeric/atomic-bigalphanumeric.component';
import { AtomicBOOLEANComponent } from './atomic-components/atomic-boolean/atomic-boolean.component';
import { AtomicDATEComponent } from './atomic-components/atomic-date/atomic-date.component';
import { AtomicDATETIMEComponent } from './atomic-components/atomic-datetime/atomic-datetime.component';
import { AtomicFLOATComponent } from './atomic-components/atomic-float/atomic-float.component';
import { AtomicHUGEALPHANUMERICComponent } from './atomic-components/atomic-hugealphanumeric/atomic-hugealphanumeric.component';
import { AtomicINTEGERComponent } from './atomic-components/atomic-integer/atomic-integer.component';
import { BoxTABLEComponent } from './box-components/box-table/box-table.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AtomicALPHANUMERICComponent,
    AtomicBIGALPHANUMERICComponent,
    AtomicHUGEALPHANUMERICComponent,
    AtomicBOOLEANComponent,
    AtomicDATEComponent,
    AtomicDATETIMEComponent,
    AtomicFLOATComponent,
    AtomicINTEGERComponent,
    BoxTABLEComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
    FormsModule,
    SkeletonModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
  ],
  exports: [
    AtomicALPHANUMERICComponent,
    AtomicBIGALPHANUMERICComponent,
    AtomicHUGEALPHANUMERICComponent,
    AtomicBOOLEANComponent,
    AtomicDATEComponent,
    AtomicDATETIMEComponent,
    AtomicFLOATComponent,
    AtomicINTEGERComponent,
    BoxTABLEComponent,
  ],
})
export class SharedModule {}
