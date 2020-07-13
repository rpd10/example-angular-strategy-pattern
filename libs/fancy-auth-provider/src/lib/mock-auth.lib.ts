import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockAuthLib {
  getIdToken = (): { [key: string]: any } => {
    const params = new URLSearchParams(window.document.location.search);
    return params.has('userName') ? { userName: params.get('userName') } : {};
  };

  loginWithRedirect = (targetUrl: string) => {
    console.log(`login, then redirect to ${targetUrl}`);
    window.document.location.href = `http://localhost:4200${targetUrl}?userName=mockUser`;
  };

  logout = () => console.log('logout');

  isProtectedRequest = (url: string) => true;

  acquireTokenSilent = (url: string) => of('mockToken');

  clearTokenCache = (token: string) => {};
}
