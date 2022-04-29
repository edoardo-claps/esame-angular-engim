import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../interface/contactInterface';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input() contatto?: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
