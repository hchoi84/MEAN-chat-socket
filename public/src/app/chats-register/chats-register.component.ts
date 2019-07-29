import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chats-register',
  templateUrl: './chats-register.component.html',
  styleUrls: ['../app.component.css', './chats-register.component.css']
})
export class ChatsRegisterComponent implements OnInit {

  private newUser: any;
  private message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Register");
    this.newUser = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    }
  }

  submitForm(){
    // checks if email exists
    this._httpService.findUserByEmail(this.newUser.email).subscribe(data => {
      if (data){
        this.message = { "email" : "" };
        this.message["email"]="Email already exists";
      }else{
        // if no email exists, create the user
        this.createUser();
      }
    });
  }

  createUser(){
    this._httpService.createUser(this.newUser).subscribe((data: any) => {
      if (data.message){
        this.message = data;
        console.log(this.message);
      }else{
        this._router.navigate(["/chats/dashboard"]);
      }
    });
  }

}
