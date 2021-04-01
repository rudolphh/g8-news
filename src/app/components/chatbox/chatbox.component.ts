import { Component, OnInit } from '@angular/core';

//my imports
import { io } from 'socket.io-client';
import { LocalStorageService } from '../../services/local-storage.service';
const SOCKET_ENDPOINT = 'g8.rudyah.com:4000';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent implements OnInit {
  socket: any;
  message: string = '';
  nick: string = '';

  chatMessages: string = '';
  hasMessages: any;

  isNick: any;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.isNick = this.localStorageService.get('nick');

    if (this.isNick) {
      this.nick = this.isNick;
    } else {
      this.isNick = false;
    }

    this.hasMessages = this.localStorageService.get('messages');
    if (this.hasMessages) {
      this.chatMessages = this.hasMessages;
      document.getElementById('textarea')!.innerHTML = this.hasMessages;
    } else {
      this.hasMessages = false;
    }

    this.setupSocketConnection();
    document.getElementById('textarea')!.scrollTop = document.getElementById(
      'textarea'
    )!.scrollHeight;
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);

    this.socket.on('chat', (data: any) => {
      if (data.nick && data.message) {
        var chatMsg =
          "<p style='text-align: right;'>" + "<span style='color : black'>" + data.message + "</span>" +
          ' <small style="margin: 0 3px 0 5px;"> [' + data.date + '] </small> ' + data.nick + '</p>';
        this.chatMessages += chatMsg;
        this.localStorageService.set('messages', this.chatMessages);

        document
          .getElementById('textarea')!
          .insertAdjacentHTML('beforeend', chatMsg);
        document.getElementById('textarea')!.scrollTop = document.getElementById('textarea')!.scrollHeight;
      }
    });
  }

  ngOnDestroy(): void {
    //stop listening message
    this.socket.off('chat');
  }

  SendMessage() {
    console.log('nick: ' + this.nick + ', message: ' + this.message);

    this.socket.emit('nick', this.nick);
    this.socket.emit('chat', this.message);

    if (this.nick && this.message) {
      this.localStorageService.set('nick', this.nick);
      let curDate = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      //let location = localStorage.getItem('userLocal')

      var chatMsg =
        "<p><strong>" +
        this.nick +
        ' <small style="margin: 0 5px 0 3px"> [' +
        curDate +
        '] </small>' +
        '</strong>' +
        "<span style='color : black'>" + this.message + "</span>" +
        '</p>';
      this.chatMessages += chatMsg;
      this.localStorageService.set('messages', this.chatMessages);

      document.getElementById('textarea')!.insertAdjacentHTML('beforeend', chatMsg);
      document.getElementById('textarea')!.scrollTop = document.getElementById('textarea')!.scrollHeight;

      this.message = "";
    }
  }

  openForm() {
    document.getElementById('main-chat')!.style.display = 'block';
  }

  closeForm() {
    document.getElementById('main-chat')!.style.display = 'none';
  }
}
