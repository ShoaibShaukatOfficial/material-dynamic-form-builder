import { ControlBase } from './control-base';

export class DynamicTextArea extends ControlBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options.type || '';
  }
}
