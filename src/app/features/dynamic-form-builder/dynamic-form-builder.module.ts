import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [DynamicFormComponent, DynamicFormControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  exports: [DynamicFormComponent, DynamicFormControlComponent]

})
export class DynamicFormBuilderModule { }
