import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { Chat, ChatGroup } from 'src/app/core/interfaces/chat.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { ChatService } from 'src/app/core/services/chats.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export default class ChatPage implements OnInit {
  protected userLogged: User;
  protected user2: User;
  protected book: Book;
  protected newMessage: string = '';
  protected groupId: string;
  protected messages: Chat[] = [];

  private unsubscribe: () => void;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private chatService: ChatService,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private booksService: BooksService,
  ) { }

  async ngOnInit() {
    const chatGroupId = this.route.snapshot.paramMap.get('id');
    this.groupId = chatGroupId;
    this.setData(chatGroupId);

    this.unsubscribe = this.chatService.listenToMessages(this.groupId, (msgs) => {
      this.messages = msgs;
    });
  }

  private async setData(id: string) {
    this.userLogged = await this.usersService.getCurrentUser();

    const [part1, bookIdRaw, part2] = id.split('.');

    const id1 = part1;
    const id2 = part2;
    const bookId = bookIdRaw;

    const otherUserId = id1 === this.userLogged.id ? id2 : id1;

    this.user2 = await this.usersService.getUserByUserId(otherUserId);
    this.book = await this.booksService.getBookByBookId(bookId);
  }

  ngOnDestroy() {
    if (this.unsubscribe) this.unsubscribe();
  }

  protected async sendMessage() {
    if (!this.newMessage.trim()) return;
    await this.chatService.sendMessage(this.groupId, {
      userId: this.userLogged.id,
      message: this.newMessage,
      createdAt: new Date().toISOString(),
    });
    this.newMessage = '';
  }

  protected goBack() {
    this.navCtrl.back();
  }
}