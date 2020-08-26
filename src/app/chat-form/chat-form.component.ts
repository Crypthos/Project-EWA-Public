import {Component, OnInit} from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;

  constructor(private chat: ChatService) {
  }

  ngOnInit(): void {
  }

    /**
        Message package
     */
  send(): void{
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event): void{
// TODO enter toets reageert niet, vermoed dat het te maken heeft met bug uit feed.component.html
    if (event.key === 13) {
      this.send();
    }
  }

}
