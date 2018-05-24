import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
