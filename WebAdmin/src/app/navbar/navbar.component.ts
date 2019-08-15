import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AutenticateService} from "../servicesrequests/autenticate.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  itemsLogout: MenuItem[];
  LogIn: any

  constructor(private authservices: AutenticateService) {
  }

  ngOnInit() {
    this.LogIn = this.authservices.getValidate()
    this.items = [
      {
        label: 'Services', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              items: [{label: 'Register Type Products', routerLink: ['services/registerServices']}]

            },
            {
              items: [{label: 'View Type Products', routerLink: ['services/getServices']}]

            },
            {
              items: [{label: 'Register Products', routerLink: ['services/registerSubServices']}]

            },
            {
              items: [{label: 'View  Products', routerLink: ['services/getSubServices']}]

            }
          ]
        ]
      },
      {
        label: 'Reservation', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Make a Sale Note', routerLink: ['services/registerSaleNote']}]

            },
            {
              items: [{label: 'View Sale Note', routerLink: ['services/getReservations']}]

            }
          ]
        ]
      },
    ];
    this.itemsLogout = [
      {
        label: 'Services', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              items: [{label: 'Register Type Products', routerLink: ['services/registerServices']}]

            },
            {
              items: [{label: 'View Type Products', routerLink: ['services/getServices']}]

            },
            {
              items: [{label: 'Register Products', routerLink: ['services/registerSubServices']}]

            },
            {
              items: [{label: 'View  Products', routerLink: ['services/getSubServices']}]

            }
          ]
        ]
      },
      {
        label: 'Reservation', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Make a Sale Note', routerLink: ['services/registerSaleNote']}]

            },
            {
              items: [{label: 'View processes', routerLink: ['services/getReservations']}]

            }

          ]
        ]
      },
      {
        label: 'Users', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'View a Users', routerLink: ['user/getUser']}]

            },
            {
              items: [{label: 'Register Users', routerLink: ['user/register']}]

            }
          ]
        ]
      },
    ];

  }
  logOut() {
    this.LogIn = false
    this.authservices.logoutUser()

  }

  crearDato() {
    return console.log("entre")
  }

}
