import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AcAuthStrategyOptions } from '../authentication.module';

@Component({
  selector: 'appcore-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(
    @Inject('config') private authConfig: AcAuthStrategyOptions
  ) { }

  ngOnInit(): void {
    // alert(this.authConfig.baseEndpoint)
  }

  save() {
    alert('get-started from base');
  }

}
