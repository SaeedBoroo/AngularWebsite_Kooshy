import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}
