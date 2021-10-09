import { Component,  OnInit, OnDestroy  } from '@angular/core';  
import {RouterModule} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';  
import { CertificateService } from '../services/certificate.service'; 
import {Subject} from 'rxjs';

@Component ({
    selector: 'app-certificate',
    templateUrl: './viewcertificate.component.html',
    styleUrls: ['./viewcertificate.component.css']   
})

export class ViewCertificateComponent implements OnInit, OnDestroy  {   
  CertificateList: any = [];
  educator_id: number = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    public restApi: CertificateService,
    private actRoute: ActivatedRoute
  ) {
    this.educator_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {        
    this.dtOptions = { 
      searching:false,      
      paging: false,
      scrollX:false,  
      responsive: true,   
      info:false,   
      processing: true
    };  
    
    this.loadCertificateDetails();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // Get education list
  loadCertificateDetails() {
    return this.restApi.getCertificateDetails(this.educator_id).subscribe((data: {}) => {
      console.log(this.educator_id);
      this.CertificateList = data;
      this.dtTrigger.next();
    })   
  }
}