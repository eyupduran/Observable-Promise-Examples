import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //SUBJECT KULLANIMI
  messageSource: Subject<string> = new Subject(); //Subject nesnesi : hem observer hem de observable olabilir
  messageReceiver = this.messageSource.asObservable(); //subject nesnesini observable yaptık, artık dinleyebiliriz

  //BEHAVİOR SUBJECT 
  messageBehavior = new BehaviorSubject<string>("") //Başlangıç olarak değer initilaze edilir
  setMessage(message: string) {
    this.messageSource.next(message); //subject nesnesi setlendiğinde bu metod sayesinde gözlemcilere haber verilir
  }

  setBehaviorSubjectMessage(message:string){
    this.messageBehavior.next(message) //Yeni değer set edilmesi
  }

  constructor(){
  }
  
}
