//Modules Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
//Import hammerjs 
import 'hammerjs';
//Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { DoctordetailComponent } from './doctordetail/doctordetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//services imports 
import { DoctorService } from './services/doctor.service';

//Router import
import { AppRoutingModule } from './app-routing/app-routing.module';

//import base url
import { baseURL } from '../shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  ProductsComponent,
    OverviewComponent,
    ContactComponent,
    DoctordetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [
  DoctorService,
  {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
