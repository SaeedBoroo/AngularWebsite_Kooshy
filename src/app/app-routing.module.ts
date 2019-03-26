import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './shared/components/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { JobListComponent } from './shared/components/job-list/job-list.component';
import { JobDetailComponent } from './shared/components/job-detail/job-detail.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { JobCategoryComponent } from './shared/components/job-category/job-category.component';
import { JobCategory2Component } from './shared/components/job-category2/job-category2.component';
import { JobSearchComponent } from './shared/components/job-search/job-search.component';


const routes: Routes = [
    {
      path: '',
      component: ContentLayoutComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: "full" },
        { path: 'home',component: HomeComponent, canActivate: [ AuthGuardService ]},
        { path: 'job-list', component: JobListComponent },
        { path: 'job-detail', component: JobDetailComponent },
        { path: 'job-detail/:id', component: JobDetailComponent },
        { path: 'search', component: JobSearchComponent },
        { path: 'category', component: JobCategoryComponent },
        { path: 'category2', component: JobCategory2Component },
        { path: 'about-us', component: AboutUsComponent },
        { path: 'display-data',component: DisplayDataComponent,canActivate: [ AuthGuardService ]},
        { path: 'profile',component: ProfileComponent,canActivate: [ AuthGuardService ]},
        { path: 'login', component: LoginFormComponent},
        { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
      ]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [ ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
