import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authService: any;

  constructor() {
  }
}
