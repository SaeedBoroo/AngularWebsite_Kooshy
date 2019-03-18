
import { NgModule } from '@angular/core';
import { 
  DxButtonModule, DxTabsModule,

} from 'devextreme-angular';


@NgModule({
  imports: [
    DxButtonModule,
    DxTabsModule
  ],
  exports: [
    DxButtonModule,
    DxTabsModule
  ]
})
export class DxModule {
}