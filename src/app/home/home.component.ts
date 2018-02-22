import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../../shared/doctor';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  
})

export class HomeComponent implements OnInit {

	doctors: Doctor[];
  docErrMess: string;
  selectedDoctor: Doctor;

  constructor(private doctorservice: DoctorService,
      @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.doctorservice.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    }, errmess => this.docErrMess = <any>errmess);
  }

  onSelect(doctor: Doctor) {
  	this.selectedDoctor = doctor;
  }

}
