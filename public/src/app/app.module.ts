import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChatsComponent } from './chats/chats.component';
import { ChatsLoginComponent } from './chats-login/chats-login.component';
import { ChatsRegisterComponent } from './chats-register/chats-register.component';
import { ChatsDashboardComponent } from './chats-dashboard/chats-dashboard.component';
import { ChatsNewComponent } from './chats-new/chats-new.component';
import { ChatsConversationComponent } from './chats-conversation/chats-conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    ChatsLoginComponent,
    ChatsRegisterComponent,
    ChatsDashboardComponent,
    ChatsNewComponent,
    ChatsConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
