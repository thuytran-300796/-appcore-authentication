import * as i0 from '@angular/core';
import { Injectable, Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    constructor(authConfig) {
        this.authConfig = authConfig;
    }
    ngOnInit() {
        // alert(this.authConfig.baseEndpoint)
    }
}
AuthenticationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationComponent, deps: [{ token: 'config' }], target: i0.ɵɵFactoryTarget.Component });
AuthenticationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthenticationComponent, selector: "appcore-authentication", ngImport: i0, template: `
    <p>
      authentication works! (0.0.3)
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-authentication',
                    template: `
    <p>
      authentication works! (0.0.3)
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });

class AuthenticationModule {
    constructor() { }
    static forRoot(config) {
        return {
            ngModule: AuthenticationModule,
            providers: [{ provide: 'config', useValue: config }]
        };
    }
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
        }], ctorParameters: function () { return []; } });

class GetStartedComponent {
    constructor(authConfig) {
        this.authConfig = authConfig;
    }
    ngOnInit() {
        // alert(this.authConfig.baseEndpoint)
    }
    save() {
        alert('get-started from base');
    }
}
GetStartedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedComponent, deps: [{ token: 'config' }], target: i0.ɵɵFactoryTarget.Component });
GetStartedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: GetStartedComponent, selector: "appcore-get-started", ngImport: i0, template: "<p>get-started works!</p>\n<button class=\"btn btn-primary\" (click)=\"save()\">Get Started</button>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-get-started',
                    templateUrl: './get-started.component.html',
                    styleUrls: ['./get-started.component.css']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });

class GetStartedModule {
}
GetStartedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GetStartedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedModule, declarations: [GetStartedComponent], imports: [CommonModule], exports: [GetStartedComponent] });
GetStartedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GetStartedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GetStartedComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        GetStartedComponent
                    ]
                }]
        }] });

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginComponent, selector: "appcore-login", ngImport: i0, template: "<p>login works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-login',
                    templateUrl: './login.component.html',
                    styleUrls: ['./login.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class LoginModule {
}
LoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginModule, declarations: [LoginComponent], imports: [CommonModule], exports: [LoginComponent] });
LoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        LoginComponent
                    ]
                }]
        }] });

class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RegisterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RegisterComponent, selector: "appcore-register", ngImport: i0, template: "<p>register works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-register',
                    templateUrl: './register.component.html',
                    styleUrls: ['./register.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class RegisterModule {
}
RegisterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RegisterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterModule, declarations: [RegisterComponent], imports: [CommonModule], exports: [RegisterComponent] });
RegisterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RegisterComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        RegisterComponent
                    ]
                }]
        }] });

class ResendCodeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResendCodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ResendCodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ResendCodeComponent, selector: "appcore-resend-code", ngImport: i0, template: "<p>resend-code works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-resend-code',
                    templateUrl: './resend-code.component.html',
                    styleUrls: ['./resend-code.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ResendCodeModule {
}
ResendCodeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResendCodeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeModule, declarations: [ResendCodeComponent], imports: [CommonModule], exports: [ResendCodeComponent] });
ResendCodeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendCodeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResendCodeComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ResendCodeComponent
                    ]
                }]
        }] });

class ResendPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResendPasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ResendPasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ResendPasswordComponent, selector: "appcore-resend-password", ngImport: i0, template: "<p>resend-password works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-resend-password',
                    templateUrl: './resend-password.component.html',
                    styleUrls: ['./resend-password.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ResendPasswordModule {
}
ResendPasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResendPasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordModule, declarations: [ResendPasswordComponent], imports: [CommonModule], exports: [ResendPasswordComponent] });
ResendPasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResendPasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResendPasswordComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ResendPasswordComponent
                    ]
                }]
        }] });

class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ResetPasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ResetPasswordComponent, selector: "appcore-reset-password", ngImport: i0, template: "<p>reset-password works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-reset-password',
                    templateUrl: './reset-password.component.html',
                    styleUrls: ['./reset-password.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ResetPasswordModule {
}
ResetPasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResetPasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordModule, declarations: [ResetPasswordComponent], imports: [CommonModule], exports: [ResetPasswordComponent] });
ResetPasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResetPasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResetPasswordComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ResetPasswordComponent
                    ]
                }]
        }] });

class UpdatePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdatePasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpdatePasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: UpdatePasswordComponent, selector: "appcore-update-password", ngImport: i0, template: "<p>update-password works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-update-password',
                    templateUrl: './update-password.component.html',
                    styleUrls: ['./update-password.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class UpdatePasswordModule {
}
UpdatePasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpdatePasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordModule, declarations: [UpdatePasswordComponent], imports: [CommonModule], exports: [UpdatePasswordComponent] });
UpdatePasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UpdatePasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UpdatePasswordComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        UpdatePasswordComponent
                    ]
                }]
        }] });

class VerifyAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
VerifyAccountComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VerifyAccountComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: VerifyAccountComponent, selector: "appcore-verify-account", ngImport: i0, template: "<p>verify-account works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'appcore-verify-account',
                    templateUrl: './verify-account.component.html',
                    styleUrls: ['./verify-account.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class VerifyAccountModule {
}
VerifyAccountModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VerifyAccountModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountModule, declarations: [VerifyAccountComponent], imports: [CommonModule], exports: [VerifyAccountComponent] });
VerifyAccountModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VerifyAccountModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VerifyAccountComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VerifyAccountComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthenticationComponent, AuthenticationModule, AuthenticationService, GetStartedComponent, GetStartedModule, LoginComponent, LoginModule, RegisterComponent, RegisterModule, ResendCodeComponent, ResendCodeModule, ResendPasswordComponent, ResendPasswordModule, ResetPasswordComponent, ResetPasswordModule, UpdatePasswordComponent, UpdatePasswordModule, VerifyAccountComponent, VerifyAccountModule };
//# sourceMappingURL=thuytran-300796-authentication.js.map
