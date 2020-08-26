import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../models/chat-message.model';
import {AuthService} from '../services/auth.service';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
/**
 * message format attributes
 */
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  // isOwnMessage: boolean;

  constructor() {
  }

  /**
   * 
   * @param chatMessage format 
   */
  ngOnInit(chatMessage = this.chatMessage): void {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}

