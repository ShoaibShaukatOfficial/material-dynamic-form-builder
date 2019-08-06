import { Optional } from '@angular/core';

export class RuntimeConfig {
    dataUrl?: string;
    constructor(@Optional() obj: any) {
        this.dataUrl = obj.dataUrl || './assets/questions-data.json';
    }
}
