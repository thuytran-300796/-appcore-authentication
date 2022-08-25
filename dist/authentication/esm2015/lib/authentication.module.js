import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import * as i0 from "@angular/core";
export class AuthenticationModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGVudGljYXRpb24vc3JjL2xpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFnQnJFLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsZ0JBQWdCLENBQUM7SUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3JELENBQUE7SUFDSCxDQUFDOztrSEFQVSxvQkFBb0I7bUhBQXBCLG9CQUFvQixpQkFSN0IsdUJBQXVCLGFBS3ZCLHVCQUF1QjttSEFHZCxvQkFBb0IsWUFOdEIsRUFDUjs0RkFLVSxvQkFBb0I7a0JBVmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAgYmFzZUVuZHBvaW50OiBzdHJpbmc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEFjQXV0aFN0cmF0ZWd5T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXV0aGVudGljYXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XVxuICAgIH1cbiAgfVxufVxuIl19