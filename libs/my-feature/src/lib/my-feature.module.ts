import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyFeatureComponent } from './my-feature.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MyFeatureComponent },
    ]),
  ],
  declarations: [MyFeatureComponent],
})
export class MyFeatureModule {}
