import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../service/contactService.service';
import { LocationStrategy } from '@angular/common';
import { Contact } from '../../interface/contactInterface';

@Component({
  selector: 'app-contat-details',
  templateUrl: './contat-details.component.html',
  styleUrls: ['./contat-details.component.scss']
})
export class ContatDetailsComponent implements OnInit {
  contatto?: Contact
  id?: Number
  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private location: LocationStrategy) { }

  ngOnInit(): void {
    this.getId()
    console.log(this.id)
    if (this.getId() > 0) {
      this.getContact()
    }
    else {
      this.new()
    }


  }

  getId(): number {

    return this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  getContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.contactService.getContact(id).subscribe((data: Contact | undefined) => this.contatto = data)

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.contatto) {
      this.contactService.updateContact(this.contatto).subscribe(() => this.goBack())
    }
  }

  new(): void {
    let nuovo: Contact = {

      firstname: "",
      lastname: "",
      email: "",
      type: "",
      imageUrl: ""
    } as Contact;
    this.contatto = nuovo
  }

  addNew(): void {
    if (this.contatto) {
      this.contatto.imageUrl = "https://robohash.org/" + this.contatto.firstname
      console.log(this.contatto.id)
      this.contactService.addContact(this.contatto).subscribe(() => this.goBack())
    }
  }

  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.contactService.deleteContact(id).subscribe(() => this.goBack())
  }

}
