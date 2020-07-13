import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AuthModule,
  AuthStrategy,
  TokenStrategy,
} from '@example-angular-strategy-pattern/auth';
import { FancyAuthService } from './fancy-auth.service';
import { FancyTokenStrategy } from './fancy-token.service';

@NgModule({
  imports: [CommonModule, AuthModule],
  providers: [
    { provide: AuthStrategy, useExisting: FancyAuthService },
    { provide: TokenStrategy, useExisting: FancyTokenStrategy },
  ],
})
export class FancyAuthProviderModule {}
