(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('authentication', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.authentication = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService() {
        }
        return AuthenticationService;
    }());
    AuthenticationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthenticationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthenticationComponent = /** @class */ (function () {
        function AuthenticationComponent() {
        }
        AuthenticationComponent.prototype.ngOnInit = function () {
        };
        return AuthenticationComponent;
    }());
    AuthenticationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AuthenticationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthenticationComponent, selector: "appcore-authentication", ngImport: i0__namespace, template: "\n    <p>\n      authentication works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'appcore-authentication',
                        template: "\n    <p>\n      authentication works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthenticationModule = /** @class */ (function () {
        function AuthenticationModule() {
        }
        return AuthenticationModule;
    }());
    AuthenticationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AuthenticationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationModule, declarations: [AuthenticationComponent], exports: [AuthenticationComponent] });
    AuthenticationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationModule, decorators: [{
                type: i0.NgModule,
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

    exports.AuthenticationComponent = AuthenticationComponent;
    exports.AuthenticationModule = AuthenticationModule;
    exports.AuthenticationService = AuthenticationService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=authentication.umd.js.map
