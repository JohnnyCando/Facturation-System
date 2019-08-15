import {Component, OnInit} from '@angular/core';
import {CompareValidatorPasswordDirective} from "../../../../Web/src/app/shared/compare-validator-password.directive";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService, SelectItem} from "primeng/api";
import {AutenticateService} from "../servicesrequests/autenticate.service";
import {PersonAdmin} from "../models/person-admin";

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
  user: PersonAdmin = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    nif: '',
    password: '',
    gender_id: 0,
    typeUser_id: 0
  }
  roles: SelectItem[];

  constructor(private fb: FormBuilder, private messageService: MessageService, private authservices: AutenticateService) {

  }

  ngOnInit() {
    this.userform = this.fb.group({
        'first_name': new FormControl('', Validators.required),
        'typeUser_id': new FormControl('', Validators.compose([Validators.required])),
        'last_name': new FormControl('', Validators.required),
        'address': new FormControl('', Validators.required),
        'phone': new FormControl('', Validators.required),
        'nif': new FormControl('', Validators.required),
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
    this.roles = [];
    this.roles.push({label: 'Select Type User', value: ''});
    this.roles.push({label: 'Client', value: '1'});
    this.roles.push({label: 'Administrator', value: '3'});
    this.roles.push({label: 'Provider', value: '4'});
    this.roles.push({label: 'Employee', value: '2'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Services created Succesfully'});
    console.log(this.user)
  }

  onRegister() {
    return this.authservices.registerUser(this.user.first_name, this.user.last_name, this.user.address, this.user.email, this.user.password, this.user.gender_id, this.user.typeUser_id,this.user.phone,this.user.nif).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
}
