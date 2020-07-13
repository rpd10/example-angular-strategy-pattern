import { Injectable } from '@angular/core';
import { AuthStrategy } from '@example-angular-strategy-pattern/auth';
import { MockAuthLib } from './mock-auth.lib';

@Injectable({ providedIn: 'root' })
export class FancyAuthService implements AuthStrategy {
  // NOTE: MockAuthLib will be something from Auth0, MSAL, etc.
  constructor(private mockAuthLib: MockAuthLib) {}

  getUserName = () => this.mockAuthLib.getIdToken()?.userName;

  isLoggedIn = () => {
    console.log(this.getUserName());
    return !!this.getUserName();
  };

  loginRedirect = (targetUrl: string) =>
    this.mockAuthLib.loginWithRedirect(targetUrl);

  logout = () => this.mockAuthLib.logout();
}
