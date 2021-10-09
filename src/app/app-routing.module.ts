import { NgModule } from '@angular/core';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FetchEducatorComponent } from './educator/fetcheducator.component';  
import { ViewEducatorComponent } from './educator/vieweducator.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'educator', component: FetchEducatorComponent },
  { path: 'educator/view/:id', component: ViewEducatorComponent }, 
  // { path: 'certificate/view/:id', component: ViewCertificateComponent }, 
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes, {enableTracing: true, useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
