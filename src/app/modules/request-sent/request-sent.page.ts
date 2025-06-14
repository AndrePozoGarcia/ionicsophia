import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-request-sent',
  templateUrl: './request-sent.page.html',
  styleUrls: ['./request-sent.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestSentPage implements OnInit {
  private chatGroupId: string = '';
  protected book: Book;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private booksService: BooksService,
  ) { }

  async ngOnInit() {
    this.chatGroupId = this.route.snapshot.paramMap.get('id') as unknown as string;
    this.book = await this.booksService.getBookById(this.chatGroupId[1]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
