import { Component, OnInit } from '@angular/core';

//my imports
import {io} from 'socket.io-client'
const SOCKET_ENDPOINT = 'localhost:4000';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  socket: any;
  message: string = '';
  nick: string= '';

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection()
  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);

    this.socket.on('chat', (data:any) => {
      if (data.nick && data.message) {
       var chatMsg= data.nick + ' ('+ data.date  +') '+ data.message +'\n'
       document.getElementById('textarea')!.insertAdjacentHTML('beforeend', chatMsg);
       }
     });
  }

  SendMessage() {
    
    console.log('nick: '+this.nick+', message: ' + this.message)
    
    this.socket.emit('nick', this.nick);
    this.socket.emit('chat', this.message);

   if(this.nick && this.message){
       let curDate = new Date().toLocaleTimeString();
       //let location = localStorage.getItem('userLocal')
       var chatMsg=this.nick + ' ('+ curDate  +') '+ this.message +'\n'
       document.getElementById('textarea')!.insertAdjacentHTML('beforeend', chatMsg);
   }
   this.message = '';
   this.nick = '';
 }

  openForm() {
    document.getElementById("main-chat")!.style.display = "block";
  }

  closeForm() {
    document.getElementById("main-chat")!.style.display = "none";
  }

}
