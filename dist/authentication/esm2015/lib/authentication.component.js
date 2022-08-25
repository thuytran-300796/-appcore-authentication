import { Component, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthenticationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGVudGljYXRpb24vc3JjL2xpYi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBYTFELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFDNEIsVUFBaUM7UUFBakMsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7SUFDekQsQ0FBQztJQUVMLFFBQVE7UUFDTixzQ0FBc0M7SUFDeEMsQ0FBQzs7cUhBUlUsdUJBQXVCLGtCQUd4QixRQUFRO3lHQUhQLHVCQUF1Qiw4REFSeEI7Ozs7R0FJVDs0RkFJVSx1QkFBdUI7a0JBVm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7OzBCQUlJLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjQXV0aFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwY29yZS1hdXRoZW50aWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBhdXRoZW50aWNhdGlvbiB3b3JrcyEgKDAuMC4zKVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgYXV0aENvbmZpZzogQWNBdXRoU3RyYXRlZ3lPcHRpb25zXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gYWxlcnQodGhpcy5hdXRoQ29uZmlnLmJhc2VFbmRwb2ludClcbiAgfVxuXG59XG4iXX0=