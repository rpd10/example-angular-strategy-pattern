import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FancyAuthProviderModule } from '@example-angular-strategy-pattern/fancy-auth-provider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FancyAuthProviderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
