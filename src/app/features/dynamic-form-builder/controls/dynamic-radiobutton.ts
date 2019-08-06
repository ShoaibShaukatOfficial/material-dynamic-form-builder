import { ControlBase } from './control-base';

export class DynamicRadioButton extends ControlBase<string> {
  controlType = 'radiobutton';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }
}
