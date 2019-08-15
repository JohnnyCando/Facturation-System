import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToastModule} from 'primeng/toast';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {ServicesComponent} from './servicesComponents/services/services.component';
import {RegisterReservationsComponent} from './servicesComponents/register-reservations/register-reservations.component';
import {AuthSessionService} from "./servirces/authenticate/auth-session.service";
import {ServicesRequestService} from './servirces/services/services-request.service'
import {ProfileComponent} from './profile/profile.component';
import {ReservationsRequestService} from "./servirces/reservations/reservations-request.service";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {GetReservationsByUserComponent} from './servicesComponents/get-reservations-by-user/get-reservations-by-user.component';
import {GalleriaModule} from 'primeng/galleria';
import {ProgressBarModule} from 'primeng/progressbar';
import {AgmCoreModule} from '@agm/core';
import {ContactComponent} from './contact/contact.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {GetNotificationsComponent} from './notifications/get-notifications/get-notifications.component';
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: 'services/registerReservations', component: RegisterReservationsComponent},
  {path: 'services/getReservations', component: GetReservationsByUserComponent},
  {path: 'services/getNotifications', component: GetNotificationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user/update', component: UpdateUserComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    RegisterReservationsComponent,
    ProfileComponent,
    GetReservationsByUserComponent,
    ContactComponent,
    UpdateUserComponent,
    GetNotificationsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    AgmCoreModule,
    MenuModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    MatProgressSpinnerModule,
    DropdownModule,
    ToastModule,
    GalleriaModule,
    MessageModule,
    MessagesModule,
    CardModule,
    ProgressBarModule,
    HttpClientModule,
    CalendarModule,
    ProgressSpinnerModule,
    PanelModule,
    KeyFilterModule,
    PasswordModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [AuthSessionService, ServicesRequestService, ReservationsRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
