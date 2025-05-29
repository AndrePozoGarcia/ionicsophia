import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { chatGroups } from 'src/app/core/constants/chats';
import { common } from 'src/app/core/constants/common';
import { ChatGroup } from 'src/app/core/interfaces/chat.interface';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export default class ChatPage implements OnInit {
  protected userLoggedId: number = common.userLoggedId;
  protected chatGroup: ChatGroup;
  protected newMessage: string = '';

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private notificationService: NotificationService) { }

  ngOnInit() {
    const chatGroupId = Number(this.route.snapshot.paramMap.get('id'));
    this.chatGroup = chatGroups.find(group => group.id === chatGroupId);
    if (!this.chatGroup) {
      this.notificationService.showToast('Chat no encontrado, intente con otro libro.', 'danger');
      this.navCtrl.back();
      return;
    }
  }

  protected sendMessage() {
    if (!this.newMessage.trim()) return;

    this.chatGroup.chats.push({
      id: Date.now(),
      userId: this.userLoggedId,
      message: this.newMessage,
      createdAt: new Date()
    });

    this.newMessage = '';
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
