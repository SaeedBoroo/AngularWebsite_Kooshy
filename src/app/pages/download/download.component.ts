import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services';

@Component({
  selector: 'download-app',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private title: Title, private api: ApiService) {
    this.title.setTitle('دانلود اپلیکیشن کوشی');
   }

  ngOnInit() {
    this.api.downloadFile('http://cushy.ir/assets/download/cushy.apk').subscribe(
      x => {
        console.log('Download:  ', x);
      }
    );
  }

}
