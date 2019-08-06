import { NgModule, ModuleWithProviders, APP_INITIALIZER, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RuntimeConfigLoaderService } from './runtime-config-loader.service';
import { RuntimeConfig } from './runtime-config';

export function initConfig(configSvc: RuntimeConfigLoaderService) {
    return () => configSvc.loadConfig();
}
export function initData(configSvc: RuntimeConfigLoaderService) {
    return () => configSvc.loadData();
}
// @dynamic
@NgModule({
    imports: [HttpClientModule],
    providers: [
        RuntimeConfigLoaderService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [RuntimeConfigLoaderService],
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initData,
            deps: [RuntimeConfigLoaderService],
            multi: true,
        }
    ],
})
export class RuntimeConfigLoaderModule {
    static forRoot(config?: RuntimeConfig): ModuleWithProviders {
        config = (!config) ? new RuntimeConfig({}) : config;
        return {
            ngModule: RuntimeConfigLoaderModule,
            providers: [
                {
                    provide: RuntimeConfig,
                    useValue: config,
                },
                RuntimeConfigLoaderService,
            ],
        };
    }
}
