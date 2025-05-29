import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { acceptedBooks } from 'src/app/core/constants/books';
import { chatGroups } from 'src/app/core/constants/chats';
import { Book } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-request-that-be-accepted',
  templateUrl: './request-that-be-accepted.page.html',
  styleUrls: ['./request-that-be-accepted.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestThatBeAcceptedPage implements OnInit {
  protected trade: Book;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    const tradeId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.trade = acceptedBooks[tradeId];
  }

  protected goToChat() {
    console.log(this.trade);
    const chatGroupId = chatGroups.findIndex(group => group.user2Id === this.trade.userId && group.bookId === 7);
    this.router.navigate(['/app/chat', chatGroupId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
