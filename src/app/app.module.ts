import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing';
import { ReactiveFormsModule ,FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SideNavComponent } from './components/ui/side-nav/side-nav.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { StoreComponent } from './components/pages/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
