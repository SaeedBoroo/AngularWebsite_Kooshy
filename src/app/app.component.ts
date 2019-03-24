import { Component, HostBinding } from '@angular/core';
import { ScreenService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularWebsite';
  rtlEnabled = true;

constructor(private screen: ScreenService){}

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

}
