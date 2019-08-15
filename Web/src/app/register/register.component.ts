import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {CompareValidatorPasswordDirective} from "../shared/compare-validator-password.directive";
import {personClient} from "../models/personClient";
import {AuthSessionService} from "../servirces/authenticate/auth-session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]

})
export class RegisterComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  emailValidation = /^[\w]+@+[a-z 0-9]+\.+[a-z A-Z 0-9 .]*/
  nickNameValidation = /^[\D] *[^\s]+$/
  genders: SelectItem[];
  description: string;
  user: personClient = {
    first_name: '',
    last_name: '',
    email: '',
    birth_date: '',
    password: '',
    gender_id: 0,
    nick_name: ''
  }

  constructor(private fb: FormBuilder, private messageService: MessageService, private authservices: AuthSessionService, private router: Router) {
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'first_name': new FormControl('', Validators.required),
      'nick_name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10),
          Validators.pattern(this.nickNameValidation)])),
      'last_name': new FormControl('', Validators.required),
      'birth_date': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
        'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailValidation)])),
      'gender_id': new FormControl('', Validators.required),
        'confirmPassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),

      }, {
        validator: CompareValidatorPasswordDirective.passwordMatchValidator
      }
    );

    this.genders = [];
    this.genders.push({label: 'Select Gender', value: ''});
    this.genders.push({label: 'Male', value: '1'});
    this.genders.push({label: 'Female', value: '2'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Services created succesfully'});
    console.log(this.user)
  }

  onRegister() {
    let birth_date = new Date(this.user.birth_date)
    let formatDate = birth_date.getFullYear() + "/" + birth_date.getMonth() + "/" + birth_date.getDay()
    console.log(formatDate)
    return this.authservices.registerUser(this.user.first_name, this.user.last_name, formatDate, this.user.email, this.user.password, this.user.gender_id, this.user.nick_name,).subscribe(data => {
      this.router.navigate(['login'])
      console.log(data);
    }, error => console.log(error));
  }

  get diagnostic() {

    return this.userform.value;

  }


}
