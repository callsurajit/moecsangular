import { Component,  OnInit, OnDestroy  } from '@angular/core';  
import {RouterModule} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';  
import { CertificateService } from '../services/certificate.service'; 
import {Subject} from 'rxjs';

@Component ({
    selector: 'app-uploaddownload',
    templateUrl: './uploaddownload.component.html',
    styleUrls: ['./uploaddownload.component.css']   
})

export class UploadDownloadComponent {   
  title = 'Upload/Download Documents';
  files: File[] = [];

  constructor(private http: HttpClient) { }

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    //for (var i = 0; i < this.files.length; i++) { 
      formData.append("FormFile", this.files[0]);
    //}

    this.http.post('/uploaddownload-service/upload', formData)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);  
  }
}