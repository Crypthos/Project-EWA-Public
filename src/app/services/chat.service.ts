import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import * as firebase from 'firebase/app';

import {ChatMessage} from '../models/chat-message.model';

@Injectable()
export class ChatService {
  user: any;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage; // Individual message
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth
  ) {
    /* this.afAuth.authState.subscribe(auth => {
       if (auth !== undefined && auth !== null) {
         this.user = auth;
       }
     });*/
    console.log('Called sendMessage()!');
  }

  /**
   * Firebase chat bericht service/regelaar (bericht package)
   */
  // TODO Daniel, zou jij deze code kunnen wijzigen naar de spring database koppeling/variable,
  // TODO Ik heb voor nu hardcoded testcode erin geplaats om de werking te controleren
  sendMessage(msg: string): void {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'test@ewaproject.nl';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      // userName: this.userName,
      userName: 'tst-user',
      email
    });
  }

  /**
   * message object
   */
  getMessages(): AngularFireList<ChatMessage> {
    // query to create message feed binding
    console.log('calling getMessages()...'); // test line
    return this.db.list('messages', ref => {
      return ref.limitToLast(25).orderByKey();
    });
  }

  /**
   * Message date format
   */
  getTimeStamp(): Date {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();

    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();
    return now;
  }
}

