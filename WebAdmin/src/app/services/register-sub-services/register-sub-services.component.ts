import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SubServices} from "../../models/sub-services"
import {MessageService} from "primeng/api";
import {ServicesService} from "../../servicesrequests/services.service";
import {Services} from "../../models/services";
import {SelectItem} from 'primeng/api';
import {AutenticateService} from "../../servicesrequests/autenticate.service";

@Component({
  selector: 'app-register-sub-services',
  templateUrl: './register-sub-services.component.html',
  styleUrls: ['./register-sub-services.component.css'],
  providers: [MessageService]
})
export class RegisterSubServicesComponent implements OnInit {

  userform: FormGroup;
  submitted: boolean;
  providers: SelectItem[]
  services: SelectItem[]
  subService: SubServices = {
    name: '',
    price_sell: 0,
    price_buy: 0,
    type_products_id: 0,
    provider_id: 0,
  }

  constructor(private fb: FormBuilder, private messageService: MessageService, private request: ServicesService,private authservices: AutenticateService) {

  }

  ngOnInit() {
    this.getProviders()
    this.getServs()
    this.userform = this.fb.group({
        'name': new FormControl('', Validators.required),
        'price_sell': new FormControl('', Validators.required),
        'price_buy': new FormControl('', Validators.required),
        'type_products_id': new FormControl('', Validators.required),
        'provider_id': new FormControl('', Validators.required),
      }
    );
  }
  getProviders(){
    return this.authservices.getProviders().subscribe(data=>{

      this.providers = []
      for (let element of data['data']) {

        this.providers.push({label: element.first_name + element.last_name, value: element.id});


      }
    }, error => console.log(error));
  }
  getServs() {
    return this.request.getServices().subscribe(data => {
      this.services = []
      for (let element of data['data']) {

        this.services.push({label: element.name, value: element.id});


      }
    }, error => console.log(error));
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Services created Succesfully'});
    console.log(this.subService)
  }

  onRegister() {

    return this.request.registerSubServices(this.subService.name, this.subService.price_sell, this.subService.price_buy, this.subService.type_products_id).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
