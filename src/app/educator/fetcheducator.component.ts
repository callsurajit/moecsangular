import { Component,  OnInit, OnDestroy  } from '@angular/core';  
import {RouterModule} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';  
import { EducatorService } from '../services/educator.service'; 
import {Subject} from 'rxjs';

@Component ({
    selector: 'app-educator',
    templateUrl: './fetcheducator.component.html',
    styleUrls: ['./fetcheducator.component.css']   
})

export class FetchEducatorComponent implements OnInit, OnDestroy  {  
  title = 'MOECS - Educator List';  
  EducatorList: any = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    public restApi: EducatorService
  ) { }

  ngOnInit(): void {    
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      processing: true
    };  
    this.loadEducators();  
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // Get educator list
  loadEducators() {
    return this.restApi.getEducators().subscribe((data: {}) => {
      console.log(data);
      this.EducatorList = data;
      this.dtTrigger.next();
    })   
  }

  deleteEducator(id: number) {
    if(confirm("Are you sure you want to delete this educator?")) {
      console.log("Implement delete functionality here");
    }
  }
}