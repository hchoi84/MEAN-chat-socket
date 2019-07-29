import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chats-new',
  templateUrl: './chats-new.component.html',
  styleUrls: ['../app.component.css', './chats-new.component.css']
})
export class ChatsNewComponent implements OnInit {

  private newChat: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("New");
    this.newChat = {
      "name": "",
    }
  }

  createRoom(){
    this._httpService.createRoom(this.newChat).subscribe(data => {
      // TODO: make the url unique so that the room name will show on the tab
      this._router.navigate(["/chats/conversation"]);
    })
  }

}
