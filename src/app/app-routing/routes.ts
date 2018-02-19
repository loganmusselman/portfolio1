import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DoctordetailComponent } from '../doctordetail/doctordetail.component';
import { ContactComponent } from '../contact/contact.component';
import { OverviewComponent } from '../overview/overview.component';
//import { ProductsComponent } from '../products/products.component';

export const routes: Routes = [

	{ path: 'home', component: HomeComponent},
	{ path: 'overview', component: OverviewComponent },
	//{ path: 'products', component: ProductsComponent },
	{ path: 'contact', component: ContactComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];