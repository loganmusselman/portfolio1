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
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';


//Import hammerjs 
import 'hammerjs';
//Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { DoctordetailComponent } from './doctordetail/doctordetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//services imports 
import { DoctorService } from './services/doctor.service';
import { ProductService } from './services/product.service';

//Router import
import { AppRoutingModule } from './app-routing/app-routing.module';

//import base url
import { baseURL } from '../shared/baseurl';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DoctordetailComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductdetailComponent
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
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule
  ],
  entryComponents: [
    DoctordetailComponent,
    ProductdetailComponent
    
  ],
  providers: [
  DoctorService,
  ProductService,
  {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
