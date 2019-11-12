import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {

    key: '',
    name: '',
    surname: '',
    alterEmail: '',
    phoneNumber: '',
    organization: ''
};


  currentUser;

  userList;


  constructor(private profileService: ProfileService, private authFire: AngularFireAuth) {



    this.currentUser = this.authFire.auth.currentUser;

    this.profileService.getProfile(this.currentUser.uid).subscribe(data => {

      this.userList = data.map(e => {


        return {

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as Profile;

      });


      this.profile = this.userList[0];



    });


  }

  ngOnInit() {
  }


  update() {

    this.profileService.UpdateProfile(this.profile);

  }

}
