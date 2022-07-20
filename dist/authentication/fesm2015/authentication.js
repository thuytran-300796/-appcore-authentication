import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class AuthenticationService {
    constructor() { }
}
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthenticationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AuthenticationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthenticationComponent, selector: "appcore-authentication", ngImport: i0, template: `
    <p>
      authentication works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-authentication',
                    template: `
    <p>
      authentication works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class AuthenticationModule {
}
AuthenticationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthenticationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationModule, declarations: [AuthenticationComponent], exports: [AuthenticationComponent] });
AuthenticationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthenticationComponent
                    ],
                    imports: [],
                    exports: [
                        AuthenticationComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthenticationComponent, AuthenticationModule, AuthenticationService };
//# sourceMappingURL=authentication.js.map
