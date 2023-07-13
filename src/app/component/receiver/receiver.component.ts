import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  receivedMessage : string = ""
  receivedMessageBehaviorSubject:string = ""
  constructor(public messageService:MessageService){
  }

  ngOnInit(): void {
    //messageReceiver, subjectin değeri değiştiğinde buraya 
    //haber verecektir ve mesajın güncel hali alınacaktır
      this.messageService.messageReceiver.subscribe(res=>{
        this.receivedMessage = res
    })

    this.messageService.messageBehavior.subscribe(res=>{
      this.receivedMessageBehaviorSubject=res
    })
  }


}
