import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contactInterface';
import { ContactService } from '../../service/contactService.service';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../service/message.service';
import { Message } from '../../interface/messageInterface';
import { Identifier } from 'estree';
import { delay } from 'rxjs';


@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {
  contatto?: Contact;
  messages: Message[] = [];
  scrivendo?: boolean ;


  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private location: LocationStrategy,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getContact()
    this.getMessages()

  }

  getContact(): void {

    const id = Number(this.route.snapshot.paramMap.get('userId'))
    this.contactService.getContact(id).subscribe((data: Contact) => this.contatto = data)

  }

  goBack(): void {
    this.location.back();
  }
  getMessages() {
    const id = Number(this.route.snapshot.paramMap.get('userId'));
    this.messageService.getMessages().subscribe((data: Message[]) => this.messages = data.filter(message => { return message.userId == id }))
  }

  add(messaggio: string): void {
    const ida = Number(this.route.snapshot.paramMap.get('userId'));
    messaggio = messaggio.trim();
    if (!messaggio) { return; }

    let messaggino: Message = { userId: ida, type: 'outcoming', message: messaggio } as Message;
    this.messageService.addMessage(messaggino)
      .subscribe((data: Message) => {
        this.messages.push(data)
        
      });

  }
  randomAnswers(): void {
    this.scrivendo=true
    const ida = Number(this.route.snapshot.paramMap.get('userId'));
    this.messageService.getRandomMessage().subscribe(data => {
        let risposta: Message = { userId: ida, type: 'incoming', message: data.answer } as Message;
        this.messageService.addMessage(risposta).subscribe(data =>{  this.messages.push(risposta)
        this.scrivendo=false}
        )
     
    })
    


  }

  updateMessage(message: Message): void {
    if(confirm("vuoi davvero cancellare il messaggio?"))
    { 
    message.deleted = true
    this.messageService.updateMessage(message).subscribe();
    }
  }

  searchMessage(search: string):void{
    if(search.trim()=="")
    {
      this.getMessages()
    }
    const ida = Number(this.route.snapshot.paramMap.get('userId'));
    this.messageService.searchMessage(search).subscribe(data=>this.messages =data.filter(mess=>mess.userId==ida))
  }
}
