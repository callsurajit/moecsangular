import { Component,  OnInit, OnDestroy  } from '@angular/core';  
import { Router, ActivatedRoute } from '@angular/router';  
import { AdminService } from '../services/admin.service'; 
import {MatTreeModule} from '@angular/material/tree'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public restApi: AdminService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadQuestionnaireTree();
  }
  
  // Get the json tree
  loadQuestionnaireTree() {
    return this.restApi.getQuestionnaireTree().subscribe((data: {}) => {

    })   
  }
}
