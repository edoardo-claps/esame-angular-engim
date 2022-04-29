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
contatto?:Contact

  constructor( private route: ActivatedRoute,
    private contactService: ContactService,
  private location: LocationStrategy) { }

  ngOnInit(): void {
    this.getContact()
   
  }

  getContact():void{
    
    const id =Number(this.route.snapshot.paramMap.get('id'))
   this.contactService.getContact(id).subscribe((data: Contact | undefined)=> this.contatto=data)
    
   }

  goBack(): void {
    this.location.back();
  }
  
  save():void{
    if(this.contatto){
      this.contactService.updateContact(this.contatto).subscribe(()=>this.goBack())
    }
  }
}
