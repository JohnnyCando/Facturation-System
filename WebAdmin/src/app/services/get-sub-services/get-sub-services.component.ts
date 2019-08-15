import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../servicesrequests/services.service";
import {SubServices} from "../../models/sub-services";

@Component({
  selector: 'app-get-sub-services',
  templateUrl: './get-sub-services.component.html',
  styleUrls: ['./get-sub-services.component.css']
})
export class GetSubServicesComponent implements OnInit {

  constructor(private servicesReq: ServicesService) {
  }
  sub_services : SubServices[]
  ngOnInit() {
    this.getServices()
  }
  getServices() {
    this.servicesReq.getAllSubServices().subscribe(data => {
      this.sub_services = data['data']
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
}
