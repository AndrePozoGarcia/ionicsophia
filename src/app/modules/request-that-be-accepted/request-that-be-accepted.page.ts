import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { acceptedBooks } from 'src/app/core/constants/books';
import { chatGroups } from 'src/app/core/constants/chats';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-request-that-be-accepted',
  templateUrl: './request-that-be-accepted.page.html',
  styleUrls: ['./request-that-be-accepted.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestThatBeAcceptedPage implements OnInit {
  protected chatGroupId: string = '';
  protected book: Book;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private booksService: BooksService,
  ) { }

  async ngOnInit() {
    this.chatGroupId = this.route.snapshot.paramMap.get('id') as unknown as string;
    this.book = await this.booksService.getBookById(this.chatGroupId.split('.')[1]);
  }

  protected goToChat() {
    this.router.navigate(['/app/chat', this.chatGroupId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
