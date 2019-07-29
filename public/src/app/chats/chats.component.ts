import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import io from 'socket.io-client';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['../app.component.css', './chats.component.css']
})
export class ChatsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Welcome!");
  }

}
