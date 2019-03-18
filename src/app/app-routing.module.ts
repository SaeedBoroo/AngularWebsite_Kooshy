import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';


const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent
  },
    {
      path: '',
      component: ContentLayoutComponent,
      children: [
        { path: '', redirectTo: 'home1', pathMatch: "full" },
        { path: 'home1', component: HomePageComponent },
        { path: 'auth', component: AuthLayoutComponent },
        { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
      ]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
