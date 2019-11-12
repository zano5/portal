import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { DemoComponent } from './client/demo/demo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReportsComponent } from './client/reports/reports.component';
import { ChartsModule } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { BarComponent } from './client/bar/bar.component';
import { ProfileComponent } from './client/profile/profile.component';
import { BillingComponent } from './client/billing/billing.component';
import { NotificationComponent } from './client/notification/notification.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';



const firebaseConfig = {
  apiKey: 'AIzaSyCXo0XNUY9ZlOady9svPHZ8VeujBziPr-0',
  authDomain: 'tyson-23aeb.firebaseapp.com',
  databaseURL: 'https://tyson-23aeb.firebaseio.com',
  projectId: 'tyson-23aeb',
  storageBucket: 'tyson-23aeb.appspot.com',
  messagingSenderId: '374121295961',
  appId: '1:374121295961:web:79ca063fa189bf8e51c148',
  measurementId: 'G-0HP37YVEFK'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DemoComponent,
    ReportsComponent,
    BarComponent,
    ProfileComponent,
    BillingComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgbModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
