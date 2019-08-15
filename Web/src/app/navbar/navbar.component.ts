import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthSessionService} from "../servirces/authenticate/auth-session.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  itemsLogout: MenuItem[];
  LogIn: any

  constructor(private authservices: AuthSessionService) {
  }

  ngOnInit() {
    this.LogIn = this.authservices.getValidate()

    console.log(this.LogIn)
    this.itemsLogout = [
      {
        label: 'Home', icon: 'fa fa-fw fa-check', routerLink: 'home'
      },
      {
        label: 'Services', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: 'services'
      },
      {
        label: 'Reservation', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Make a reservations', routerLink: ['services/registerReservations']}]

            },
            {
              items: [{label: 'My reservations', routerLink: ['services/getReservations']}]

            }
          ]
        ]
      },
      {
        label: 'About us', icon: 'fa fa-fw fa-child',
      },
      {
        label: 'Profile', icon: 'fa fa-fw fa-child', routerLink: 'user/profile',
      },
      {
        label: 'Contact us', icon: 'fa fa-fw fa-gears', routerLink: 'contact',
      }
    ];
    this.items = [
      {
        label: 'Home', icon: 'fa fa-fw fa-check', routerLink: 'home'
      },
      {
        label: 'Services', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: 'services'
      },
      {
        label: 'Reservation', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Make a reservations', routerLink: ['services/registerReservations']}]

            },
            {
              items: [{label: 'My reservations', routerLink: ['services/getReservations']}]

            }
          ]
        ]
      },
      {
        label: 'About us', icon: 'fa fa-fw fa-child',
        items: [
          [
            {
              items: [{label: 'Mission', routerLink: ['home']}]

            },
            {
              items: [{label: 'Vision'}]

            }
          ]
        ]
      },
      {
        label: 'Contact us', icon: 'fa fa-fw fa-gears', routerLink: 'contact',
      }
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
