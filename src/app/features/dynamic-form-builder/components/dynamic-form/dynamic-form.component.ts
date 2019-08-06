import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ControlBase } from '../../controls';
import { FormGroup } from '@angular/forms';
import { DynamicControlService } from '../../services/dynamic-control.service';
import { Mode } from './enum';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})

export class DynamicFormComponent implements OnInit {

  @Input() controlsData: ControlBase<any>[] = [];
  @Input() controlMode: Mode;
  @Input() controlsToDisplay: any;
  ModeEnum: Mode;
  displayedcontrols: any;
  form = new FormGroup({});
  @Output() saveClick = new EventEmitter();
  controlkeyList: any;
  index = 0;
  formData: { [key: string]: string };
  constructor(@Inject(DynamicControlService) private dynamicControlService: DynamicControlService) {
    this.controlsToDisplay = this.controlsToDisplay || this.controlsData.length;
  }

  ngOnInit() {
    this.ModeEnum = Mode.single;
    this.controlkeyList = [...new Set(this.controlsData.map(item => item.key))];
    this.filtercontrols();
  }

  filtercontrols() {
    this.controlsToDisplay = this.controlsToDisplay || this.controlsData.length;
    if (this.controlMode === this.ModeEnum) {
      const singleItem = this.controlkeyList[this.index];
      this.displayedcontrols = this.controlsData.filter(control => control.key === singleItem);
    } else {
      this.displayedcontrols = this.controlsData.slice(this.index, this.index + this.controlsToDisplay);
    }
    this.form = this.dynamicControlService.toFormGroup(this.displayedcontrols);

  }
  onSaveClick() {
    this.saveClick.emit();
  }
  next() {
    this.preserveValues();
    (this.controlMode === this.ModeEnum) ? this.index++ : this.index += this.controlsToDisplay;
    this.filtercontrols();

  }
  back() {
    this.preserveValues();
    (this.controlMode === this.ModeEnum) ? this.index-- : this.index -= this.controlsToDisplay;
    this.filtercontrols();
  }

  preserveValues() {
    Object.keys(this.form.controls).forEach(key => {
      this.controlsData.find(x => x.key === key).value = this.form.controls[key].value;

    });
  }
  saveButtonVisibility = () => (
    (this.controlMode === this.ModeEnum) ?
      this.controlsData.length - 1 <= this.index :
      this.controlsData.length <= this.index + this.controlsToDisplay)
  nextButtonVisibility = () => (
    (this.controlMode === this.ModeEnum) ?
      this.index < this.controlsData.length - 1 && this.index >= 0 :
      this.controlsData.length !== this.controlsToDisplay &&
      this.controlsData.length > this.index + this.controlsToDisplay && this.index >= 0)
}

