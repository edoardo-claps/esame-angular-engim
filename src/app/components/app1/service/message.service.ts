import { Injectable } from '@angular/core';
import { Answer } from '../interface/answerInterface';
import { Message } from '../interface/messageInterface';
import { Observable, Subject,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<Message[]>{
      return this.http.get<Message[]>(`angular/messages`);
    
  }

   getRandomMessage(): Observable<Answer>{
    let randomNumber = 45;
    return this.http.get<Answer>(`angular/answers/${randomNumber}`);
    
   }
  addMessage(message: Message): Observable<Message>{
    return this.http.post<Message>("angular/messages", message);
  }
}
