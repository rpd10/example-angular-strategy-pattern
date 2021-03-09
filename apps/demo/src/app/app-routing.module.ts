import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RequireAuthGuard } from '@example-angular-strategy-pattern/auth';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@example-angular-strategy-pattern/login').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'protected',
    canActivate: [RequireAuthGuard],
    loadChildren: () =>
      import('@example-angular-strategy-pattern/my-feature').then(
        (m) => m.MyFeatureModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
