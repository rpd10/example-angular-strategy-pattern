import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStrategy } from '@example-angular-strategy-pattern/auth';
import { MockAuthLib } from './mock-auth.lib';

@Injectable({ providedIn: 'root' })
export class FancyTokenStrategy implements TokenStrategy {
  // NOTE: MockAuthLib will be something from Auth0, MSAL, etc.
  constructor(private mockAuthLib: MockAuthLib) {}

  requiresAuth = (req: HttpRequest<any>) =>
    this.mockAuthLib.isProtectedRequest(req.url);

  acquireToken = (req: HttpRequest<any>) =>
    this.mockAuthLib.acquireTokenSilent(req.url);

  onUnauthorized = (err: HttpErrorResponse, token: string) =>
    this.mockAuthLib.clearTokenCache(token);
}
