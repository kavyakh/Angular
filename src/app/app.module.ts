import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TicketComponent } from './ticket/ticket.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SignupComponent,
    ScheduleComponent,
    AboutusComponent,
    ContactusComponent,
    PaymentComponent,
    BookingComponent,
    ResetpasswordComponent,
    TicketComponent,
    EditProfileComponent,
    EditPaymentComponent,
    UpdateFlightComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
