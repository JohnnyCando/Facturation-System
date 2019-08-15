import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {ServicesRequestService} from "../../servirces/services/services-request.service";
import {Reservation} from "../../models/reservation";
import {AuthSessionService} from "../../servirces/authenticate/auth-session.service";
import {personClient} from "../../models/personClient";
import {ReservationsRequestService} from "../../servirces/reservations/reservations-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-reservations',
  templateUrl: './register-reservations.component.html',
  styleUrls: ['./register-reservations.component.css'],
  providers: [MessageService]
})
export class RegisterReservationsComponent implements OnInit {
  reservationFrom: FormGroup;
  submitted: boolean;
  services: SelectItem[];
  sub_services: SelectItem[];
  hairdressers1: SelectItem[];
  user: personClient
  reservation: Reservation = {
    services_id: 0,
    hairdressers: '',
    sub_service_id: 0,
    reservation_date: '',
    reservation_hour: ''

  }

  constructor(private fb: FormBuilder, private messageService: MessageService, private request: ServicesRequestService, private router: Router, private authservices: AuthSessionService, private reservationsServices: ReservationsRequestService) {
  }

  ngOnInit() {
    this.user = this.authservices.getCurrentUser()
    this.getEmployee()
    this.getServs()
    this.reservationFrom = this.fb.group({
        'reservation_date': new FormControl('', Validators.required),
        'reservation_hour': new FormControl('', Validators.required),
        'services_id': new FormControl('', Validators.required),
        'sub_services_id': new FormControl('', Validators.required),
      'hairdressers': new FormControl('', Validators.required)
      }
    );
  }

  getServs() {
    return this.request.getServices().subscribe(data => {
      this.services = []
      for (let element of data['data']) {

        this.services.push({label: element.name, value: element.id});


      }
    }, error => console.log(error));
  }

  onRegisterReservations() {
    let reservation_date = new Date(this.reservation.reservation_date)
    let formatDate = reservation_date.getFullYear() + "/" + reservation_date.getMonth() + "/" + reservation_date.getDay()
    let reservation_hour = new Date(this.reservation.reservation_hour)
    let formatHour = reservation_hour.getHours() + ":" + reservation_hour.getMinutes()
    console.log(formatDate)
    console.log(formatHour)
    return this.reservationsServices.registerReservations(this.user.id, this.reservation.services_id, this.reservation.hairdressers, formatDate, formatHour).subscribe(data => {
      console.log(data);
      this.router.navigate(['services/getReservations'])
    }, error => console.log(error));
  }
  getSubServs(id) {
    return this.request.getSubServicesById(id).subscribe(data => {
      this.sub_services = []
      for (let element of data['data']) {

        this.sub_services.push({label: element.name, value: element.id});

      }
    }, error => console.log(error));
  }

  getEmployee() {
    return this.authservices.getEmployee().subscribe(data => {
      this.hairdressers1 = []
      for (let element of data['data']) {
        this.hairdressers1.push({
          label: element.first_name + " " + element.last_name,
          value: element.first_name + " " + element.last_name
        })
      }
    })
  }


  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Type services created succesfully'});
    console.log(this.reservation)

  }
}
