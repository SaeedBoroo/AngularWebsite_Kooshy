import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {  SingleCardModule, SideNavOuterToolbarComponent, SideNavInnerToolbarComponent } from './layouts';
import {  LoginFormModule, HomeComponent } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    SideNavOuterToolbarComponent,
    SideNavInnerToolbarComponent,
    HomeComponent

  ],
  imports: [
    CoreModule,
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SingleCardModule,
    LoginFormModule,
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
