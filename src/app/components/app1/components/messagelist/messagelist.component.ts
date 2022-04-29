import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contactInterface';
import { LocationStrategy } from '@angular/common';
import { ContactService } from '../../service/contactService.service';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss']
})
export class MessagelistComponent implements OnInit {
  contacts?: Contact[]


  constructor(  private location:LocationStrategy,
    private contactService:ContactService) { }

  ngOnInit(): void {
  this.getContacts()

  }

  getContacts(){
    
    this.contactService.getContacts().subscribe((data: Contact[])=>{
      this.contacts = data
    });
   
  }

  goBack(): void {
    this.location.back();
  }
}
