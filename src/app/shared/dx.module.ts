
import { NgModule } from '@angular/core';
import { 
    DxButtonModule,
    DxTabsModule,
    DxGalleryModule, 
    DxTextBoxModule, 
    DxToolbarModule, 
    DxDrawerModule,
    DxScrollViewModule,
    DxListModule,
    DxContextMenuModule,
    DxTreeViewModule,
    DxMapModule,
    DxLoadIndicatorModule,

} from 'devextreme-angular';


@NgModule({
  imports: [
    DxButtonModule,
    DxTabsModule,
    DxGalleryModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxDrawerModule,
    DxScrollViewModule,
    DxListModule,
    DxContextMenuModule,
    DxTreeViewModule,
    DxMapModule,
    DxLoadIndicatorModule
  ],
  exports: [
    DxButtonModule,
    DxTabsModule,
    DxGalleryModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxDrawerModule,
    DxScrollViewModule,
    DxListModule,
    DxContextMenuModule,
    DxTreeViewModule,
    DxMapModule,
    DxLoadIndicatorModule
  ]
})
export class DxModule {
}