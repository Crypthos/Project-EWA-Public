/*
representatie van een chat bericht
 */
export class ChatMessage {
  $key?: string;
  email?: string;
  userName?: string;
  message?: string;
  timeSent?: Date = new Date();
}
