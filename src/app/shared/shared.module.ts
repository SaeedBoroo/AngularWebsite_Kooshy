import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { DxModule } from './dx.module';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { ApiService } from './services/api-service.service';
import { HeaderComponent, UserPanelComponent, SideNavigationMenuComponent } from './components';
import { JobCategoryComponent } from './components/job-category/job-category.component';
import { DataTransferService } from './services';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { HttpLogMessageService } from './services/http-log-message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    DxModule
  ],
  entryComponents: [
    // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
  ],
  declarations: [
    JobListComponent,
    JobDetailComponent,
    JobCategoryComponent,
    HeaderComponent,
    UserPanelComponent,
    SideNavigationMenuComponent,
    JobSearchComponent
    
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    DxModule,
    UserPanelComponent,
    HeaderComponent,
    SideNavigationMenuComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    // Forcing the whole app to use the returned providers from the AppModule only.
    return {
      ngModule: SharedModule,
      providers: [ ApiService, DataTransferService, HttpErrorHandler, HttpLogMessageService ]
    };
  }
}