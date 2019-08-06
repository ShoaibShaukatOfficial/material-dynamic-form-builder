import { ControlBase } from './control-base';

export class DynamicCheckbox extends ControlBase<string> {
  controlType = 'checkbox';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }
}
