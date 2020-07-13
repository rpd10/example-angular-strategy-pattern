import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { TokenStrategy } from './token.strategy';

const HTTP_AUTHORIZATION_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStrategy: TokenStrategy) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // figure out if the request requires authentication.
    const shouldAuth = this.requiresAuth(req);

    if (shouldAuth) {
      return this.tokenStrategy.acquireToken(req).pipe(
        mergeMap((token) =>
          next
            .handle(
              req.clone({
                setHeaders: {
                  [HTTP_AUTHORIZATION_HEADER]: `Bearer ${token}`,
                },
              })
            )
            .pipe(
              catchError((err) => {
                // if the error is HTTP 401, call the token service to handle the error
                if (
                  err instanceof HttpErrorResponse &&
                  err.status === 401 &&
                  this.tokenStrategy.onUnauthorized
                ) {
                  this.tokenStrategy.onUnauthorized(err, token);
                }
                return throwError(err);
              })
            )
        )
      );
    } else {
      return next.handle(req);
    }
  }

  private requiresAuth(req: HttpRequest<any>): boolean {
    return (
      !req.headers.has(HTTP_AUTHORIZATION_HEADER) &&
      this.tokenStrategy.requiresAuth(req)
      // plus whatever other rules you may have - check headers, etc.
    );
  }
}
