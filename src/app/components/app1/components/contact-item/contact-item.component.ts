import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../interface/contactInterface';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../service/contactService.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contatto?: Contact;
  
  
  constructor(  
    ) { }

  ngOnInit(): void {
   
  }

  
}
