import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

    // Post
    createUser(userInfo){ return this._http.post("/users", userInfo); }
    loginUser(loginInfo){ return this._http.post("/users/login", loginInfo); }
    
    createRoom(newChat){ return this._http.post("/chats", newChat); }
    addMessage(message){ return this._http.post(`/chats/addMessage/${message.id}`, message); }

    // Get
    findUserByEmail(email){ return this._http.get(`/users/${email}`); }

    getAllChats(){ return this._http.get("/chats"); }
    getChatHistory(id){ return this._http.get(`/chats/${id}`); }

    // Put

    // Delete
}
