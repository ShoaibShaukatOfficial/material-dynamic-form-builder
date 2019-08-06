import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuntimeConfigLoaderModule } from '../runtime-config-loader';
import { DynamicContorlDataService } from './services/dynamic-control-data.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RuntimeConfigLoaderModule.forRoot({
      // dataUrl: './assets/profile-creation-question.json'
      dataUrl: './assets/questions-data.json'
    }),
  ],
  providers: [DynamicContorlDataService]

})
export class CoreModule { }
