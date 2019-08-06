import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../controls';

@Injectable({ providedIn: 'root' })
export class DynamicControlService {
    constructor() { }

    toFormGroup(contorls: ControlBase<any>[]) {
        const group: any = {};

        contorls.forEach(control => {
            group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                : new FormControl(control.value || '');
        });
        return new FormGroup(group);
    }
}
