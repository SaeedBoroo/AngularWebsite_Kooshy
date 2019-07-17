import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "src/app/shared/services";

@Component({
  selector: "download-app",
  templateUrl: './download.component.html',
  styleUrls: ["./download.component.scss"]
})
export class DownloadComponent  implements OnInit {
  fileUrl: 'https://drive.google.com/open?id=1bt5xJuId9muZARxeyhWO74-UZUKpM84r';
  fileUrl2 = 'assets/download/test.pdf';
  fileUrl_GoFile: string;

  constructor(private title: Title, private api: ApiService,) {
    this.title.setTitle('دانلود اپلیکیشن کوشی');
  }

  ngOnInit() {
    this.fileUrl_GoFile = this.api.DownloadUrl_GoFile;
  }

  // downloadFile() {
  //   this.api.getFile_APK().subscribe(resp => {
  //     saveAs(resp, 'cushy.apk');
  //   })
  // }


  // download(data) {
  //   const blob = new Blob([data], { type: 'application/vnd.android.package-archive' });
  //   const url = window.URL.createObjectURL(blob);
  //   console.log('URL:: ', url),
  //   console.log('blob:: ', blob),
  //   window.open(url);
  // }
}
