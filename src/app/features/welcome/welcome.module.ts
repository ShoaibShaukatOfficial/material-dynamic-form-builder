import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    WelcomeRoutingModule,
    DynamicFormBuilderModule
  ]
})
export class WelcomeModule {
  start = false;
}
