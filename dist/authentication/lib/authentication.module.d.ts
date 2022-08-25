import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./authentication.component";
export interface AcAuthStrategyOptions {
    baseEndpoint: string;
}
export declare class AuthenticationModule {
    constructor();
    static forRoot(config: AcAuthStrategyOptions): ModuleWithProviders<AuthenticationModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AuthenticationModule, [typeof i1.AuthenticationComponent], never, [typeof i1.AuthenticationComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AuthenticationModule>;
}
