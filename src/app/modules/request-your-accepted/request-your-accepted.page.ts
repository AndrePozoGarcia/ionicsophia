import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { books, tradeBooks } from 'src/app/core/constants/books';
import { chatGroups } from 'src/app/core/constants/chats';
import { common } from 'src/app/core/constants/common';
import { Book } from 'src/app/core/interfaces/book.interface';
import { ChatGroup } from 'src/app/core/interfaces/chat.interface';

@Component({
  selector: 'app-request-your-accepted',
  templateUrl: './request-your-accepted.page.html',
  styleUrls: ['./request-your-accepted.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestYourAcceptedPage implements OnInit {
  protected trade: Book;
  private userLoggedId: number = common.userLoggedId;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    const tradeId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.trade = books[tradeId];
  }

  protected goToChat() {
    const chatGroupId = chatGroups.findIndex(group => group.user2Id === this.trade.userId && group.bookId === this.trade.id);
    this.router.navigate(['/app/chat', chatGroupId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
