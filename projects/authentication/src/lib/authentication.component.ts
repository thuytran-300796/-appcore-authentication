import { Component, Inject, OnInit } from '@angular/core';
import { AcAuthStrategyOptions } from './authentication.module';

@Component({
  selector: 'appcore-authentication',
  template: `
    <p>
      authentication works! (0.0.3)
    </p>
  `,
  styles: [
  ]
})
export class AuthenticationComponent implements OnInit {

  constructor(
    @Inject('config') private authConfig: AcAuthStrategyOptions
  ) { }

  ngOnInit(): void {
    // alert(this.authConfig.baseEndpoint)
  }

}
