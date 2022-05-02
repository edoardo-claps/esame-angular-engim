import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, Subject } from 'rxjs';
import { Contact } from '../interface/contactInterface';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>("angular/contacts")
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`angular/contacts/${id}`);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put("angular/contacts", contact, this.httpOptions);
  }
  addContact(contatto: Contact): Observable<any> {
    return this.http.post("angular/contacts", contatto, this.httpOptions)
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`angular/contacts/${id}`)

  }

  searchContactByFirstname(search: string): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts/?firstname=' + search)
  }

  searchContactByLastname(search: string): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts/?lastname=' + search)
  }

  getTeachers(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts/?type=teacher')
  }
  getStudents(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts/?type=student')
  }
}
