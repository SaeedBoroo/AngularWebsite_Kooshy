import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-footer2',
  template: `
    <footer><ng-content></ng-content></footer>
  `,
  styleUrls: ['./footer.component.scss']
})

export class Footer2Component {

}

@NgModule({
  declarations: [ Footer2Component ],
  exports: [ Footer2Component ]
})
export class Footer2Module { }
