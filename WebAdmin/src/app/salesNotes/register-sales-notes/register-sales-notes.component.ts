import { Component, OnInit } from '@angular/core';
import {SalesNotes} from "../../models/sales-notes";
import {ServicesService} from "../../servicesrequests/services.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService, SelectItem} from "primeng/api";
import {AutenticateService} from "../../servicesrequests/autenticate.service";
import {DetailSaleNote} from "../../models/detail-sale-note";

@Component({
  selector: 'app-register-sales-notes',
  templateUrl: './register-sales-notes.component.html',
  styleUrls: ['./register-sales-notes.component.css'],
  providers:[MessageService]
})
export class RegisterSalesNotesComponent implements OnInit {
  sales_note: SalesNotes = {
    user_id: 0,
    typeOfSell_id: 1
  }
  detail: DetailSaleNote  = {
    quantityXProducts: 0,
    totalPay: 0,
    products_id: 0,
    type_products: 0,
  }
  details:any =[]
  SaleNote: FormGroup
  submitted: boolean;
  users: SelectItem[];
  Products: SelectItem[];
  typeProducts: SelectItem[]

  constructor(private servicess: ServicesService, private fb: FormBuilder, private messageService: MessageService, private authservices: AutenticateService) {
  }

  ngOnInit() {
    this.getServs()
    this.getUsersClient()
    this.SaleNote = this.fb.group({
      'user_id': new FormControl('', Validators.required),
      'type_products': new FormControl('', Validators.required),
      'products_id': new FormControl('', Validators.required),
      'quantityXProducts': new FormControl('', Validators.required),
      'totalPay': new FormControl('', Validators.required)
    })

  }

  getServs() {
    return this.servicess.getServices().subscribe(data => {
      this.typeProducts = []
      for (let element of data['data']) {

        this.typeProducts.push({label: element.name, value: element.id});


      }
    }, error => console.log(error));
  }

  getServices(id: number) {
    return this.servicess.getSubServicesById(id).subscribe(data => {
      this.Products = []
      for (let element of data['data']) {

        this.Products.push({label: element.name, value: element.id});


      }
    }, error => console.log(error));
  }

  getUsersClient() {
    return this.authservices.getClients().subscribe(data => {
      this.users = []
      for (let element of data['data']) {

        this.users.push({label: element.first_name +' '+ element.last_name , value: element.id});


      }
    }, error => console.log(error));
  }
  addDetail(products_id:number,quantityXProducts:number):void{
    this.details.push({'products_id': products_id, 'quantityXProducts': quantityXProducts})
   console.log(this.details)

 }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Services created Succesfully'});

  }
  onRegister() {

    return this.servicess.registerSaleNote(this.sales_note.user_id,this.sales_note.typeOfSell_id).subscribe(result => {
      console.log(result);
      for (let detail of this.details) {
        console.log('enter',detail)
        return this.servicess.registerDetailSaleNote(result['data'].id,detail.products_id,detail.quantityOfProducts).subscribe(data=>{
          console.log('enter')
          console.log(data)
        })
      }

    }, error => console.log(error));
  }
}
