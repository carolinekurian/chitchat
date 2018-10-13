import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from './message.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class EchoBotService {

    constructor(private http: HttpClient) {}
    public botUrl: string = 'http://messages.getsandbox.com/messages';

    public sendMessage (message: string): Observable<Message> {

        return this.http.post<Message>(this.botUrl, { message }, httpOptions);
    }

}
