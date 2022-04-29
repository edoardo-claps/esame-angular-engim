import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contactInterface';
import { ContactService } from '../../service/contactService.service';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../service/message.service';
import { Message } from '../../interface/messageInterface';
import { Identifier } from 'estree';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {
  contatto?: Contact
  messages: Message[] = [];
 

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
    this.messageService.getMessages().subscribe((data: Message[]) => this.messages = data.filter(message => {return message.userId==id} ))
  }
 
  add(messaggio: string): void {
    const ida = Number(this.route.snapshot.paramMap.get('userId'));
    /* messaggio = messaggio.trim();

    if (!messaggio) { return; } */
    
    let messaggino: Message = { userId: ida , type: 'outcoming',  message: messaggio} as Message;
   
    this.messageService.addMessage(messaggino)
      .subscribe((data:Message) => {
        this.messages.push(data);
       
      });
      console.log(this.messages)
   
  }

 /*  delete(message: message): void {
    
    this.messageService.deletemessage(message.id).subscribe(() => {
      this.messagees = this.messagees.filter(h => h !== message)
    });
  }
} */
}
