import { Component, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class GetStartedComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGVudGljYXRpb24vc3JjL2xpYi9nZXQtc3RhcnRlZC9nZXQtc3RhcnRlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRoZW50aWNhdGlvbi9zcmMvbGliL2dldC1zdGFydGVkL2dldC1zdGFydGVkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7QUFRcEUsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUM0QixVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtJQUN6RCxDQUFDO0lBRUwsUUFBUTtRQUNOLHNDQUFzQztJQUN4QyxDQUFDO0lBRUQsSUFBSTtRQUNGLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2lIQVpVLG1CQUFtQixrQkFHcEIsUUFBUTtxR0FIUCxtQkFBbUIsMkRDUmhDLHdHQUVBOzRGRE1hLG1CQUFtQjtrQkFML0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OzBCQUlJLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY0F1dGhTdHJhdGVneU9wdGlvbnMgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHBjb3JlLWdldC1zdGFydGVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dldC1zdGFydGVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdldFN0YXJ0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgYXV0aENvbmZpZzogQWNBdXRoU3RyYXRlZ3lPcHRpb25zXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gYWxlcnQodGhpcy5hdXRoQ29uZmlnLmJhc2VFbmRwb2ludClcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgYWxlcnQoJ2dldC1zdGFydGVkIGZyb20gYmFzZScpO1xuICB9XG5cbn1cbiIsIjxwPmdldC1zdGFydGVkIHdvcmtzITwvcD5cbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic2F2ZSgpXCI+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cbiJdfQ==