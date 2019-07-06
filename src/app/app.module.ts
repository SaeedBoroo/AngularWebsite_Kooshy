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
import { httpInterceptorProviders } from './shared/http-interceptors';
import { RequestCache, RequestCacheWithMap } from './shared/services/request-cache.service';
import { CushyHelpComponent } from './pages/cushy-help/cushy-help.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DownloadComponent } from './pages/download/download.component';

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
    HomeComponent,
    CushyHelpComponent,
    DownloadComponent

  ],
  imports: [
    CoreModule,
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SingleCardModule,
    LoginFormModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AuthService, 
    ScreenService, 
    AppInfoService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
