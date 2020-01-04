import { DonneeService } from './services/donnee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './composants/sign-in/sign-in.component';
import { SignOutComponent } from './composants/sign-out/sign-out.component';
import { WelcomeComponent } from './composants/welcome/welcome.component';


import {FormsModule} from '@angular/Forms' ;

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignOutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DonneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
