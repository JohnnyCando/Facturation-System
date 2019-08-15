import {Component, OnInit} from '@angular/core';

import {Services} from "../../models/services";
import {ServicesRequestService} from "../../servirces/services/services-request.service";
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Services[]
  value: boolean

  constructor(private servicesReq: ServicesRequestService) {
  }

  ngOnInit() {
    this.getServices()
  }

  getServices() {
    this.servicesReq.getServices().subscribe(data => {
      this.services = data['data']
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  getImage(base64: string, typeImage: string) {
    let image = 'data:' + typeImage + ";base64," + base64
    return image
  }
}


