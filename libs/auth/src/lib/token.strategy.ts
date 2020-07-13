import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class TokenStrategy {
  /**
   * Determine whether this token handler is able to acquire a token for a given request.
   *
   * @returns true if this token handler is able to acquire a token for the given request, false otherwise
   */
  requiresAuth: (req: HttpRequest<any>) => boolean;

  /**
   * Acquire a token for the given request.
   *
   * @returns an Observable of a bearer token
   */
  acquireToken: (req: HttpRequest<any>) => Observable<string>;

  /**
   * Handle HTTP 401 Unauthorized responses from the server.  This function is optional.
   * The auth provider may want to clear token caches, etc.
   */
  onUnauthorized?: (err: HttpErrorResponse, token: string) => void;
}
