import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EchoBotService } from "./echo-bot.service";
import { Message } from "./message.model";
import { UserMessage } from "./user-message.model";

@Component({
    selector: 'chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {

    constructor(private activatedroute: ActivatedRoute, public botservice: EchoBotService){}

    public name;
    public message: string
    public messageHistory: UserMessage[] = [];
    public isDefaultUser: boolean = false;
    public isEmptyMessage: boolean = false;
    @ViewChild('scroll') public scrollElement: ElementRef;

    ngOnInit() {

        this.name = this.activatedroute.snapshot.queryParamMap.get('name');
        
        if (!this.name){
            this.name = 'Default User';
            this.isDefaultUser = true;
        }
    }

    public onSend(): void{

        if (this.message){
            this.isEmptyMessage = false;
            this.sendToMessageHistory({user: this.name, message: this.message});
            this.botservice.sendMessage(this.message).subscribe((data: Message) => {
            
                this.sendToMessageHistory({user: 'Echobot', message: data.message});
                
            })
            this.message = '';
        }
        else{
            this.isEmptyMessage = true;
        }
    }

    private sendToMessageHistory(userMessage: UserMessage): void{
        this.messageHistory.push(userMessage);
        setTimeout(() => this.scrollElement.nativeElement.scrollIntoView());
    }

}