import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './login.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {



  profile = {

    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    organization: '',
    uid: ''

  };

  constructor(private afs: AngularFirestore, private router: Router, private authFire: AngularFireAuth) {



   }


   UpdateProfile(profile) {


      const fire = this.afs.collection('Users').doc(profile.key);

      fire.update(profile).then(() => {
        alert('Successfully Updated');
      }).catch(err => {


        alert('Error' + err.message);

      });

   }

   getProfile(uid) {

    return this.afs.collection('Users', ref => ref.where('uid', '==', 'uid')).snapshotChanges();

   }


   addProfile() {

    const fire = this.afs.collection('Users');

    this.profile.uid = this.authFire.auth.currentUser.uid;

    fire.add(this.profile).then(() => {

      alert('Successfully Registered');

      this.router.navigateByUrl('login');
    });

   }











}
