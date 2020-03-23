import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  roomId;
  messagesArray;
  constructor(private activatedRoute: ActivatedRoute, private ms: MessagesService) { }

  ngOnInit() {
    this.roomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ms.getMessages(this.roomId).subscribe((response: any) => {
      console.log(response);
      this.messagesArray = response.data;
    });
  }

}
