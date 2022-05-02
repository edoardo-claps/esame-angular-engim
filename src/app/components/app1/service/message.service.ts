import { Injectable } from '@angular/core';
import { Answer } from '../interface/answerInterface';
import { Message } from '../interface/messageInterface';
import { Observable, Subject, of, delay } from 'rxjs';
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

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`angular/messages`);

  }

  getRandomMessage(): Observable<Answer> {
    let randomNumber = Math.floor(Math.random() * 100);
    return this.http.get<Answer>(`angular/answers/${randomNumber}`).pipe( delay(3000));

  }
  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>("angular/messages", message);
  }
  updateMessage(messagio:Message):Observable<any>{
    return this.http.put('api/messages/', messagio)
  }

  searchMessage(search: string):Observable<Message[]>{
    return this.http.get<Message[]>('api/messages/?message='+search)
  }
}
