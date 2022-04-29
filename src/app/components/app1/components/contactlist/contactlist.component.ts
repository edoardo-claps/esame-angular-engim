import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Contact } from '../../interface/contactInterface';
import { Observable, Subject } from 'rxjs';
import { ContactService } from '../../service/contactService.service';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
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
