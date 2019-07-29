import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import io from 'socket.io-client';

@Component({
  selector: 'app-chats-dashboard',
  templateUrl: './chats-dashboard.component.html',
  styleUrls: ['../app.component.css', './chats-dashboard.component.css']
})
export class ChatsDashboardComponent implements OnInit {

  private allChats: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Dashboard");
    this.getAllChats();
  }

  getAllChats(){
    this._httpService.getAllChats().subscribe(data => {
      this.allChats = data;
    })
  }

  connectToSocket(){
    io.connect("http://localhost:8000");
  }

}
