import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

declare const Pusher: any;

@Injectable()
export class PusherService implements OnInit {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      authEndpoint: 'http://localhost:8080/pusher/auth',
    });

    this.messagesChannel = this.pusher.subscribe('private-messages');
  }


  ngOnInit() {
    console.log('asdasdas');
  }
}
