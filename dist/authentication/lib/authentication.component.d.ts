import { OnInit } from '@angular/core';
import { AcAuthStrategyOptions } from './authentication.module';
import * as i0 from "@angular/core";
export declare class AuthenticationComponent implements OnInit {
    private authConfig;
    constructor(authConfig: AcAuthStrategyOptions);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthenticationComponent, "appcore-authentication", never, {}, {}, never, never>;
}
