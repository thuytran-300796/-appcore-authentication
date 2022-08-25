import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';

export interface AcAuthStrategyOptions {
  baseEndpoint: string;
}

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule {
  constructor() { }
  static forRoot(config: AcAuthStrategyOptions): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [{ provide: 'config', useValue: config }]
    }
  }
}
