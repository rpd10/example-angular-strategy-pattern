import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-angular-strategy-pattern-my-feature',
  templateUrl: './my-feature.component.html',
  styleUrls: ['./my-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
