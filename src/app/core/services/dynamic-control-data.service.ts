import { Injectable, Inject } from '@angular/core';
import {
  ControlBase, DynamicRadioButton, DynamicTextbox, DynamicTextArea, DynamicDropdown,
  DynamicCheckbox, DynamicAutoComplete, DynamicDatePicker
} from '../../features/dynamic-form-builder/controls';
import { RuntimeConfigLoaderService } from '../../runtime-config-loader/runtime-config-loader.service';


@Injectable()
export class DynamicContorlDataService {
  private q = {};
  constructor(@Inject(RuntimeConfigLoaderService) private dynamicControlDatasvc: RuntimeConfigLoaderService) {

  }

  getcontrols() {
    const datafromsvc: [] = this.dynamicControlDatasvc.getcontrolData();

    const controls: ControlBase<any>[] = [];
    datafromsvc.forEach((svccontrol: any) => {
      switch (svccontrol.type) {

        case 'radiobutton': {
          controls.push(new DynamicRadioButton(svccontrol));
          break;
        }
        case 'textbox': {
          controls.push(new DynamicTextbox(svccontrol));
          break;
        }
        case 'textarea': {
          controls.push(new DynamicTextArea(svccontrol));
          break;
        }
        case 'dropdown': {
          controls.push(new DynamicDropdown(svccontrol));
          break;
        }
        case 'checkbox': {
          controls.push(new DynamicCheckbox(svccontrol));
          break;
        }
        case 'autocomplete': {
          controls.push(new DynamicAutoComplete(svccontrol));
          break;
        }
        case 'datepicker': {
          controls.push(new DynamicDatePicker(svccontrol));
          break;
        }
        default: break;
      }
    });

    return controls.sort((a, b) => a.order - b.order);
  }
}
