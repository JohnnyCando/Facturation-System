import {Component, OnInit} from '@angular/core';
import {MessageService, SelectItem} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductInWineries} from "../../models/product-in-wineries";
import {ServicesService} from "../../servicesrequests/services.service";

import {Router} from "@angular/router";


@Component({
  selector: 'app-delete-services',
  templateUrl: './delete-services.component.html',
  styleUrls: ['./delete-services.component.css'],
  providers: [MessageService]
})
export class DeleteServicesComponent implements OnInit {
    productsWineriesForm : FormGroup
  submitted: boolean;
  typeProducts: SelectItem[];
  Products: SelectItem[];
  reservation: ProductInWineries = {
    products_id: 0,
    quantityOfProducts: 0
  }

  constructor(private servicesReq: ServicesService,private fb: FormBuilder, private messageService: MessageService, private router: Router) {
  }

  ngOnInit() {
    this.getServs()
    this.productsWineriesForm = this.fb.group({
        'products_id': new FormControl('', Validators.required),
        'type_products': new FormControl('', Validators.required),
        'quantityOfProducts': new FormControl('', Validators.required)
      }
    );
  }
  getServs() {
    return this.servicesReq.getServices().subscribe(data => {
      this.typeProducts = []
      for (let element of data['data']) {

        this.typeProducts.push({label: element.name, value: element.id});


      }
    }, error => console.log(error));
  }
  getSubServs(id) {
    return this.servicesReq.getSubServicesById(id).subscribe(data => {
      this.Products = []
      for (let element of data['data']) {

        this.Products.push({label: element.name, value: element.id});

      }
    }, error => console.log(error));
  }
  onRegisterProductInWiniries() {
    return this.servicesReq.registerProductInWineries(this.reservation.products_id,this.reservation.quantityOfProducts).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Type services created succesfully'});
    console.log(this.reservation)

  }
}
