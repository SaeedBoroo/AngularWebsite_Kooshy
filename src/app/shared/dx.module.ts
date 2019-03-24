
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
    DxTreeViewModule
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
    DxTreeViewModule
  ]
})
export class DxModule {
}