import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FetchEducatorComponent } from './educator/fetcheducator.component';  
import {DataTablesModule} from 'angular-datatables';
import { ViewEducatorComponent } from './educator/vieweducator.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ViewCertificateComponent } from './certificate/viewcertificates.component';  
import { UploadDownloadComponent } from './uploaddownload/uploaddownload.component';  
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AdminComponent } from './admin/admin.component';
import { MatTreeModule } from "@angular/material/tree";

@NgModule({
  declarations: [
    AppComponent,   
    SidenavListComponent, 
    NoPageFoundComponent,
    FetchEducatorComponent,
    ViewEducatorComponent,
    ViewCertificateComponent,
    UploadDownloadComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    HttpClientModule,
    DataTablesModule,
    MatTabsModule,
    MatCardModule,
    NgxDropzoneModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
