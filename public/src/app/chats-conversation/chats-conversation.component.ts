import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import io from 'socket.io-client';
import * as moment from 'moment';

@Component({
  selector: 'app-chats-conversation',
  templateUrl: './chats-conversation.component.html',
  styleUrls: ['../app.component.css', './chats-conversation.component.css']
})
export class ChatsConversationComponent implements OnInit {

  private message: string;
  private socket: io = io();
  // private conversation: any;
  private content: any;
  private userName: string;
  private chatId: string;
  private chatHistory: Array<any>;
  private sender: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
    ) { }
    
  ngOnInit() {
    this._titleService.setTitle("Convo");
    this._route.params.subscribe((params: Params) => this.chatId = params.id);
    this.userName = prompt("Please enter your display name:", "Howard");
    this.content = {
      "name": "",
      "content": "",
      "date_time": "",
    };
    this.chatHistory = [];
    this.sender = [];
    this.getAllMessages();
  }

  getAllMessages(){
    this._httpService.getChatHistory(this.chatId).subscribe((data: any) => {
      for (let i in data.messages){
        this.sender.push(data.messages[i].name === this.userName)
        this.content = {
          "name": data.messages[i].name,
          "content": data.messages[i].content,
          "date_time": data.messages[i].date_time,
        }
        this.chatHistory.push(this.content);
        }
    });
  }

  submitMessage(){
    this.content = {
      "id": this.chatId,
      "name": this.userName,
      "content": this.message,
      "date_time": moment(),
    }
    this._httpService.addMessage(this.content).subscribe(data => {});
    this.socketEmit();
  }

  socketEmit(){
    this.socket.emit("message_sent", this.content);
    this.message = "";
  }

  // TODO: Fix multiple listeners. Additiona listener being added on everytime message is processed
  socketReceive(){
    this.socket.on("display_new_message", data => {
      console.log("socket.on");
      this.sender.push(data.name === this.userName);
      this.chatHistory.push(data);
    });
  }

}