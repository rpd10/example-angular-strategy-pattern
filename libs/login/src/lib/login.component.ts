import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthStrategy } from '@example-angular-strategy-pattern/auth';

@Component({
  selector: 'example-angular-strategy-pattern-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authStrategy: AuthStrategy) {}

  public login() {
    this.authStrategy.loginRedirect('/protected');
  }
}
