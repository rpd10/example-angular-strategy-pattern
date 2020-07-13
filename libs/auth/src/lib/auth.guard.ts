import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthStrategy } from './auth.strategy';

@Injectable({ providedIn: 'root' })
export class RequireAuthGuard implements CanActivate {
  constructor(private router: Router, private authStrategy: AuthStrategy) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    if (this.authStrategy.isLoggedIn()) {
      return true;
    }

    try {
      this.authStrategy.loginRedirect(state.url);
      return true;
    } catch (err) {
      return this.router.parseUrl('/');
    }
  }
}
