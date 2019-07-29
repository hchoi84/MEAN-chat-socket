import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsComponent } from './chats/chats.component';
import { ChatsLoginComponent } from './chats-login/chats-login.component';
import { ChatsRegisterComponent } from './chats-register/chats-register.component';
import { ChatsDashboardComponent } from './chats-dashboard/chats-dashboard.component';
import { ChatsNewComponent } from './chats-new/chats-new.component';
import { ChatsConversationComponent } from './chats-conversation/chats-conversation.component';

const routes: Routes = [
  { path: "chats", component: ChatsComponent},
  { path: "chats/login", component: ChatsLoginComponent},
  { path: "chats/register", component: ChatsRegisterComponent},
  { path: "chats/dashboard", component: ChatsDashboardComponent},
  { path: "chats/new", component: ChatsNewComponent},
  { path: "chats/:id", component: ChatsConversationComponent},

  { path: "", pathMatch: 'full', redirectTo: '/chats'},
  { path: '**', component: ChatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
