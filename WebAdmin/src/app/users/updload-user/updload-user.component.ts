import {Component, OnInit} from '@angular/core';
import {AutenticateService} from "../../servicesrequests/autenticate.service";
import {MessageService} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {PersonAdmin} from "../../models/person-admin";

@Component({
  selector: 'app-updload-user',
  templateUrl: './updload-user.component.html',
  styleUrls: ['./updload-user.component.css'],
  providers: [MessageService]
})

export class UpdloadUserComponent implements OnInit {

  userform: FormGroup;
  submitted: boolean;
  emailValidation = /^[\w]+@+[a-z 0-9]+\.+[a-z A-Z 0-9 .]*/
  genders: SelectItem[];
  roles: SelectItem[];
  description: string;
  idUsedUpdate: number
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

  constructor(private fb: FormBuilder, private messageService: MessageService, private authservices: AutenticateService) {
  }

  ngOnInit() {
    this.idUsedUpdate = parseInt(this.authservices.getIdUser())
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
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Services created succesfully'});
    console.log(this.user)
  }

  removeID() {
    localStorage.removeItem('idUsedUser')
  }

  onRegister() {

    return this.authservices.updateUser(this.user.first_name, this.user.last_name, this.user.address, this.user.email, this.user.password, this.user.gender_id, this.user.typeUser_id,this.user.phone,this.user.nif, this.idUsedUpdate).subscribe(data => {
      localStorage.removeItem('currentUser')
      this.authservices.setUser(this.user)

      console.log(data);

    }, error => console.log(error));
  }

  get diagnostic() {

    return this.userform.value;

  }
}
