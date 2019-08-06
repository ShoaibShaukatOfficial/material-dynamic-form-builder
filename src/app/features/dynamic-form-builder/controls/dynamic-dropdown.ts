import { ControlBase } from './control-base';

export class DynamicDropdown extends ControlBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }
}
