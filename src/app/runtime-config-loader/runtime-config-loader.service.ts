import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuntimeConfig } from './runtime-config';
import { Subject } from 'rxjs';

@Injectable()
export class RuntimeConfigLoaderService {
    private configUrl = '';
    private configObject: { [x: string]: any; };
    private controlsData: [];
    public configSubject: Subject<any> = new Subject<any>();
    public dataSubject: Subject<any> = new Subject<any>();
    private dataUrl = '';

    constructor(@Inject(HttpClient) private http: HttpClient, @Inject(RuntimeConfig) private config: RuntimeConfig) {
        if (config) {
            if (!this.dataUrl) {
                this.dataUrl = config.dataUrl;
            }
        }
    }
    loadData(): Promise<any> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .then((controlsData: any) => {
                this.controlsData = controlsData;
                this.dataSubject.next(this.controlsData);
            })
            .catch((err: any) => {
                this.dataSubject = null;
                this.dataSubject.next(this.controlsData);
            });
    }
    getcontrolData() {
        return this.controlsData;
    }
    loadConfig(): Promise<any> {
        return this.http
            .get(this.configUrl)
            .toPromise()
            .then((configData: any) => {
                this.configObject = configData;
                this.configSubject.next(this.configObject);
            })
            .catch((err: any) => {
                this.configObject = null;
                this.configSubject.next(this.configObject);
            });
    }

    getConfig() {
        return this.configObject;
    }

    getConfigObjectKey(key: string) {
        return this.configObject ? this.configObject[key] : null;
    }
}
