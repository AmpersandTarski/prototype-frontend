import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { BoxTableHeaderTemplateDirective } from './box-components/box-table/box-table-header-template.directive';
import { BoxTableRowTemplateDirective } from './box-components/box-table/box-table-row-template.directive';
import { BoxTableLoadingComponent } from './box-components/box-table-loading/box-table-loading.component';
import { BoxTabComponent } from './box-components/box-tab/box-tab.component';
import { BoxTabDirective } from './box-components/box-tab/box-tab.directive';
import { BoxFormComponent } from './box-components/box-form/box-form.component';
import { BoxFormTemplateDirective } from './box-components/box-form/box-form-template.directive';
import { BoxFormLoadingComponent } from './box-components/box-form-loading/box-form-loading.component';
import { BoxRawComponent } from './box-components/box-raw/box-raw.component';
import { BoxRawTemplateDirective } from './box-components/box-raw/box-raw-template.directive';

// PrimeNG modules
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

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
    BoxTableHeaderTemplateDirective,
    BoxTableRowTemplateDirective,
    BoxTableLoadingComponent,
    BoxTabComponent,
    BoxTabDirective,
    BoxFormComponent,
    BoxFormTemplateDirective,
    BoxFormLoadingComponent,
    BoxRawComponent,
    BoxRawTemplateDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
    SkeletonModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    SplitButtonModule,
    PasswordModule,
    TabViewModule,
    ButtonModule,
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
    BoxTableHeaderTemplateDirective,
    BoxTableRowTemplateDirective,
    BoxTableLoadingComponent,
    BoxTabComponent,
    BoxTabDirective,
    BoxFormComponent,
    BoxFormTemplateDirective,
    BoxFormLoadingComponent,
    BoxRawComponent,
    BoxRawTemplateDirective,
  ],
})
export class SharedModule {}
