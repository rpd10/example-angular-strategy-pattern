export abstract class AuthStrategy {
  isLoggedIn: () => boolean;

  getUserName: () => string;

  loginRedirect: (targetUrl: string) => any;

  logout: () => any;
}
