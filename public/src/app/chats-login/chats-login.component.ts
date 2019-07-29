import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chats-login',
  templateUrl: './chats-login.component.html',
  styleUrls: ['../app.component.css', './chats-login.component.css']
})
export class ChatsLoginComponent implements OnInit {

  private loginInfo: any;
  private message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Login");
    this.loginInfo = {
      email: "",
      password: "",
    }
  }

  login(){
    this._httpService.loginUser(this.loginInfo).subscribe((data: any) => {
      console.log("Here's the data I received:", data);
      if (data.message){
        this.message = data;
      }else{
        this._router.navigate(["/chats/dashboard"]);
      }
    });
  }
}
