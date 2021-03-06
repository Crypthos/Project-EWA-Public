import {Component, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {ChatService} from '../services/chat.service';
import {ChatMessage} from '../models/chat-message.model';
import {NgZone} from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: AngularFireList<ChatMessage>;

  constructor(private chat: ChatService) {
  }
// Test code, om het gedrag van het verzonden berichten te controleren in de feed
  ngOnInit(): void {
    console.log('feed initializing...');
    this.feed = this.chat.getMessages();
  }

  ngOnChanges(): void {
    this.feed = this.chat.getMessages();
  }
}
