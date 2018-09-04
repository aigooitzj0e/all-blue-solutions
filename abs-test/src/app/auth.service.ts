import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firebase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {}
  usersList: AngularFireList<any>;

  loginForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl('')
  });

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pNumber: new FormControl('', Validators.required)
  });

  getUsers() {
    this.usersList = this.firebase.list('users');
    return this.usersList.snapshotChanges();
  }

  registerUser(user) {
    this.usersList.push({
      fullName: user.fullName,
      email: user.email,
      pNumber: user.pNumber
    });
  }

  loginUser() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // .then(() => this.router.navigate(['dashboard']));
  }

  logoutUser() {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['']));
  }

  populateForm(user) {
    this.form.setValue(user);
  }

  updateUser(user) {
    this.usersList.update(user.$key, {
      fullName: user.fullName,
      email: user.email,
      pNumber: user.pNumber
    });
  }

  deleteUser($key: string) {
    this.usersList.remove($key);
  }
}
