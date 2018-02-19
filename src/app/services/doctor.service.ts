import { Injectable } from '@angular/core';
import { Doctor } from '../../shared/doctor';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DoctorService {

	doctors: Doctor;

  constructor(public http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
  	return this.http.get<Doctor[]>(baseURL + 'doctors');

  		

  }

  private handleError(err: HttpErrorResponse){
  	let errorMessage = '';

  	if(err.error instanceof Error){
  		errorMessage = `An error occurred: ${err.error.message}`;

  	} else {
  		errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

  	}

  	console.error(errorMessage);
  	return Observable.throw(errorMessage);
  }


}
