import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { Footer2Module, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CoreModule,
    SharedModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    Footer2Module,
    LoginFormModule,
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
