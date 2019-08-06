import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { ControlBase } from '../../controls';

@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {

  constructor() { }
  @Input() controlsData: ControlBase<any>;

  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.controlsData.key].valid; }
  ngOnInit() {


  }
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

}
