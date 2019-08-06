import { ControlBase } from './control-base';

export class DynamicDatePicker extends ControlBase<string> {
  controlType = 'datepicker';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options.type || '';
  }
}
