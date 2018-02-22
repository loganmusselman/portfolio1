import { Component, OnInit, Input, Inject } from '@angular/core';
import { Doctor } from '../../shared/doctor';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-doctordetail',
  templateUrl: './doctordetail.component.html',
  styleUrls: ['./doctordetail.component.scss'],

  animations: [
  	trigger('doctorState',[
  		state('inactive', style({
  			display: 'none'
  		})),
  		state('active', style({
  			transform: 'scale(2)'
  		})),
  		transition('inactive => active', animate('1s ease-in-out')),
  		transition('active => inactive', animate('1s ease-out'))
  		])
  ]

})
export class DoctordetailComponent implements OnInit {

	@Input()
	doctor: Doctor;

  constructor(@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

}
