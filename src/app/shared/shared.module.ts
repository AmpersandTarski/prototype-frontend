import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AtomicAlphanumericComponent } from './atomic-components/atomic-alphanumeric/atomic-alphanumeric.component';
import { AtomicBigalphanumericComponent } from './atomic-components/atomic-bigalphanumeric/atomic-bigalphanumeric.component';
import { AtomicBooleanComponent } from './atomic-components/atomic-boolean/atomic-boolean.component';
import { AtomicDateComponent } from './atomic-components/atomic-date/atomic-date.component';
import { AtomicDatetimeComponent } from './atomic-components/atomic-datetime/atomic-datetime.component';
import { AtomicFloatComponent } from './atomic-components/atomic-float/atomic-float.component';
import { AtomicHugealphanumericComponent } from './atomic-components/atomic-hugealphanumeric/atomic-hugealphanumeric.component';
import { AtomicIntegerComponent } from './atomic-components/atomic-integer/atomic-integer.component';
import { AtomicObjectComponent } from './atomic-components/atomic-object/atomic-object.component';
import { AtomicPasswordComponent } from './atomic-components/atomic-password/atomic-password.component';
import { BoxTableComponent } from './box-components/box-table/box-table.component';
import { BoxTabComponent } from './box-components/box-tab/box-tab.component';

// PrimeNG modules
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AtomicAlphanumericComponent,
    AtomicBigalphanumericComponent,
    AtomicHugealphanumericComponent,
    AtomicBooleanComponent,
    AtomicDateComponent,
    AtomicDatetimeComponent,
    AtomicFloatComponent,
    AtomicIntegerComponent,
    AtomicObjectComponent,
    AtomicPasswordComponent,
    BoxTableComponent,
    BoxTabComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
    SkeletonModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    SplitButtonModule,
    PasswordModule,
    TabViewModule
  ],
  exports: [
    AtomicAlphanumericComponent,
    AtomicBigalphanumericComponent,
    AtomicHugealphanumericComponent,
    AtomicBooleanComponent,
    AtomicDateComponent,
    AtomicDatetimeComponent,
    AtomicFloatComponent,
    AtomicIntegerComponent,
    AtomicObjectComponent,
    AtomicPasswordComponent,
    BoxTableComponent,
    BoxTabComponent,
  ],
})
export class SharedModule { }
