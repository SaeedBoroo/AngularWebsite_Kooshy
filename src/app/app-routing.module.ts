import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './shared/components/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { JobListComponent } from './shared/components/job-list/job-list.component';
import { JobDetailComponent } from './shared/components/job-detail/job-detail.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { JobCategoryComponent } from './shared/components/job-category/job-category.component';
import { JobSearchComponent } from './shared/components/job-search-result/job-search.component';
import { CushyHelpComponent } from './pages/cushy-help/cushy-help.component';


const routes: Routes = [
    {
      path: '', component: ContentLayoutComponent, children: [
        { path: '', component: HomeComponent, pathMatch: "full" },
        { path: 'jobs-list', component: JobListComponent },
        { path: 'job/:id', component: JobDetailComponent , data:{noDataFound:'هیچ اطلاعاتی برای نمایش وجود ندارد'}},
        { path: 'search', component: JobSearchComponent },
        { path: 'category', component: JobCategoryComponent ,children:[
          { path: ':id', component: JobCategoryComponent},
          { path: ':id/:name', component: JobCategoryComponent}
        ]},
        
        { path: 'about-us', component: AboutUsComponent  },
        { path: 'about', redirectTo: '/about-us'  },
        { path: 'contact', redirectTo: '/about-us'  },
        { path: 'help', component: CushyHelpComponent },
        // { path: 'display-data',component: DisplayDataComponent,canActivate: [ AuthGuardService ]},
        // { path: 'profile',component: ProfileComponent,canActivate: [ AuthGuardService ]},
        // { path: 'login', component: LoginFormComponent},
         { path: '**', component: PageNotFoundComponent }
      ]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' }), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [ ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
