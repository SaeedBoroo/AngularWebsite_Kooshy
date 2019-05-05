import { Component, HostBinding, OnInit } from '@angular/core';
import { ScreenService } from './shared/services';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularWebsite';
  rtlEnabled = true;

constructor(private screen: ScreenService, private swUpdate:SwUpdate){}

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

ngOnInit(){
  if(this.swUpdate.isEnabled)
    {
      this.swUpdate.available.subscribe(()=> {

        if(confirm("ورژن جدید اپلیکیشن کوشی اومده. آیا میخواهی آپدیت کنی؟")){
          window.location.reload();
        }
      })
    }
}

}
