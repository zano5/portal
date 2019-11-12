import { ProfileService } from './profile.service';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private fireAuth: AngularFireAuth, private router: Router, private profileService: ProfileService) { }


  login(login) {

    this.fireAuth.auth.signInWithEmailAndPassword(login.email, login.password).then(() => {

      this.router.navigateByUrl('dashboard');


    }).catch(err => {

      alert('Error Incorrect Login Details' + err);



    });

  }



  logout() {

    this.fireAuth.auth.signOut().then(() => {


    this.router.navigateByUrl('login');


    });

  }

  loginCreate(login) {

    this.fireAuth.auth.signOut();


    this.fireAuth.auth.createUserWithEmailAndPassword(login.email, login.password).then(() => {



      this.fireAuth.auth.signInWithEmailAndPassword(login.email, login.password).then(() => {


        console.log('zanoxolo');

        this.profileService.addProfile();

      }).catch(err => {

        alert('Error' + err);

      });




    }).catch(err => {

      alert('Error' + err);

    });

  }



}
