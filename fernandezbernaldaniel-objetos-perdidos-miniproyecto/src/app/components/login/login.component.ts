import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

const COLLECTION_USERS = 'users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList!: Observable<User[]>;

  constructor(private router: Router, public auth: AngularFireAuth,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
      this.firestore.collection(COLLECTION_USERS).doc(resp.user?.uid).set({
        name: resp.user?.displayName,
        email: resp.user?.email,
        photoURL: resp.user?.photoURL
      });
      localStorage.setItem('name',resp.user?.displayName? resp.user?.displayName: ' ');
      localStorage.setItem('photoURL',resp.user?.photoURL? resp.user?.photoURL: '')
      localStorage.setItem('uid',resp.user?.uid? resp.user?.uid: '');
      this.router.navigate(['main']);
    })
  }

  logout(){
    this.auth.signOut();
  }

}
