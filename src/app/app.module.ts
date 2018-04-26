import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MessagesComponent} from './messages/messages.component';
import {PusherService} from "./pusher/pusher.service";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: MessagesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
