import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	form: FormGroup;

  constructor(private fb: FormBuilder) {

  	this.createForm();

  }

  createForm(){
  	this.form = this.fb.group({
  		firstname: '',
  		lastname: '',
  		carrier: '',
  		area: ''
  	});

  }

  ngOnInit() {
  }



  onSubmit(){
  	this.form = this.form.value;
  	console.log(this.form);
  	return this.form;

  }

  

}
