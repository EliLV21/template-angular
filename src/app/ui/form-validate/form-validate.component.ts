import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  ngOnInit() {
  }
  // text = 'contact page';
  // contactForm: FormGroup;
  // contact = {
  //   name: '',
  //   email: '',
  //   text: ''
  // };
  // submitted = false;
  //
  // constructor() {
  //   this.createForm();
  // }
  //
  // createForm(): void {
  //   this.contactForm = new FormGroup({
  //     'name': new FormControl(this.contact.name, [
  //       Validators.required,
  //       Validators.minlength(4)
  //     ]),
  //     'email': new FormControl(this.contact.email, [
  //       Validators.required,
  //       Validators.email
  //     ]),
  //     'text': new FormControl(this.contact.text, Validators.required)
  //   });
  // }
  // onSubmit(): void {
  //   this.submitted = true;
  // }

}
