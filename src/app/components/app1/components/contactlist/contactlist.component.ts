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
  this.searchContactByFirstname("")
    this.searchContactByLastname("")
    this.searchContactByType("")
  }

  getContacts(){
    
    this.contactService.getContacts().subscribe((data: Contact[])=>{
      this.contacts = data
    });
   
  }

  goBack(): void {
    this.location.back();
  }

  searchContactByFirstname(search: string): void{
    if(search.trim()){
      this.getContacts()
    }
    this.contactService.searchContactByFirstname(search).subscribe(data=>{this.contacts=data})
    }
    
  searchContactByLastname(search: string): void{
    if(!search.trim()){
      this.getContacts()
    }
    this.contactService.searchContactByLastname(search).subscribe(data=>{this.contacts=data})
    }

    searchContactByType(string :string):void{
      if(string==""){
        this.getContacts()
      }
      else if(string == "teacher"){
        this.contactService.getContacts().subscribe(data=> this.contacts=data.filter(contatto => { return contatto.type == "teacher" }))
      }
      else if(string == "student"){
        this.contactService.getStudents().subscribe(data=> this.contacts=data.filter(contatto => { return contatto.type == "student" }))
      }
      else{
        this.contactService.getStudents().subscribe(data=> this.contacts=data.filter(contatto => { return contatto.type == string }))
      }
    
    }
}
