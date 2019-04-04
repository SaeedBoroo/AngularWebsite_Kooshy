
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
    DxMapModule
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
    DxMapModule
  ]
})
export class DxModule {
}