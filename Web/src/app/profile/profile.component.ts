import {Component, OnInit} from '@angular/core';
import {AuthSessionService} from "../servirces/authenticate/auth-session.service";
import {personClient} from "../models/personClient";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {

  user: personClient
  submitted: boolean;

  constructor(private authservices: AuthSessionService, private messageService: MessageService, private router: Router) {

  }

  ngOnInit() {
    this.user = this.authservices.getCurrentUser()

  }

  update(id) {
    this.authservices.setIdUser(id)
    this.router.navigate(['user/update'])
  }
  login() {

    this.submitted = true;
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'loggin Succesfully'});
  }

  refresh() {

    window.location.reload()


  }
}
