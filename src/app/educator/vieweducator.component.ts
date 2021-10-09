import { Component,  OnInit, OnDestroy  } from '@angular/core';  
import {RouterModule} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';  
import { EducatorService } from '../services/educator.service'; 
import {Subject} from 'rxjs';
// import { ViewCertificateComponent} from '../certificate/ViewCertificateComponent'

@Component ({
    selector: 'app-educator',
    templateUrl: './vieweducator.component.html',
    styleUrls: ['./vieweducator.component.css']   
})

export class ViewEducatorComponent implements OnInit, OnDestroy  {  
  title = 'MOECS - Educator Details';  
  Educator: any = "";
  EducationList: any = [];
  educator_id: number = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    public restApi: EducatorService,
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
    
    this.loadEducatorDetails();  
    this.loadEducationDetails();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // Get educator list
  loadEducatorDetails() {
    return this.restApi.getEducatorDetails(this.educator_id).subscribe((data: {}) => {
      console.log(data);
      this.Educator = data;     
    })   
  }

  // Get education list
  loadEducationDetails() {
    return this.restApi.getEducattionDetails(this.educator_id).subscribe((data: {}) => {
      console.log(data);
      this.EducationList = data;
      this.dtTrigger.next();
    })   
  }
}