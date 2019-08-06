import { ControlBase } from './control-base';

export class DynamicAutoComplete extends ControlBase<string> {
  controlType = 'autocomplete';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }
}
