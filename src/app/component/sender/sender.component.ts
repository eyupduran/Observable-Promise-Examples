import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent{
  message : string =""
  messageBehavior:string=""

  constructor(public messageService:MessageService){
  }

  //mesaj subjectin next metoduyla setlendiği için receivere
  //subsribe olanlar artık mesajın güncel halini alabilecekler.
  sendMessage() {
    this.messageService.setMessage(this.message); 
  }
  sendMessageBehavior(){
    this.messageService.setBehaviorSubjectMessage(this.messageBehavior)
  }
}
