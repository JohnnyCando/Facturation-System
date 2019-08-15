import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ServicesService} from "../../servicesrequests/services.service";
import {ProductInWineries} from "../../models/product-in-wineries";

@Component({
  selector: 'app-update-sub-services',
  templateUrl: './update-sub-services.component.html',
  styleUrls: ['./update-sub-services.component.css'],
  providers: [MessageService]
})
export class UpdateSubServicesComponent implements OnInit {

  productsInWineries: ProductInWineries[]
  constructor(private servicesReq: ServicesService) {
  }

  ngOnInit() {
    this.getAllProductsInWineries()
  }

  UpdateQuantity(id: number,quantityOfProducts:number) {
    this.servicesReq.UpdateQuantity(id, quantityOfProducts).subscribe(data => {
      console.log(data)
    }, error => console.log(error))
  }

  getAllProductsInWineries() {

    this.servicesReq.getAllProductsInWineries().subscribe(data => {
      this.productsInWineries = data['data']


    }, error => console.log(error));
  }
}
