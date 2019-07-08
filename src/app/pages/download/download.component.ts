import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services';

@Component({
  selector: 'download-app',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  fileUrl: any;


  constructor(private title: Title, private api: ApiService, private sanitizer: DomSanitizer) {
    this.title.setTitle('دانلود اپلیکیشن کوشی');
   }

  ngOnInit() {
    this.api.downloadFile().subscribe(download => {
      const data = download;
      const blob = new Blob([data], { type: 'application/vnd.android.package-archive' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    });
    }


}
