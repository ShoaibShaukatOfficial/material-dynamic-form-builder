import { ControlBase } from './control-base';

export class DynamicTextbox extends ControlBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options.type || '';
  }
}
