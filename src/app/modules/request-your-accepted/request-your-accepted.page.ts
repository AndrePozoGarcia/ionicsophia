import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { chatGroups } from 'src/app/core/constants/chats';
import { Book } from 'src/app/core/interfaces/book.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-request-your-accepted',
  templateUrl: './request-your-accepted.page.html',
  styleUrls: ['./request-your-accepted.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestYourAcceptedPage implements OnInit {
  private books: Book[] = [];
  private chatGroupId: string = '';
  protected requestUserId: string;
  protected requestUserName: string;
  protected usersMap: { [key: string]: string } = {};
  protected trade: Book;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private booksService: BooksService,
    private usersService: UsersService
  ) { }

  async ngOnInit() {
    this.loadUsers();
    this.chatGroupId = this.route.snapshot.paramMap.get('id') as unknown as string;
    this.requestUserId = this.chatGroupId.split('.')[0];
    this.books = await this.booksService.getBooks();
    this.trade = this.books.find(book => book.id == this.requestUserId);
  }

  private async loadUsers() {
    const users: User[] = await this.usersService.getUsers();
    this.usersMap = {};
    users.forEach(user => {
      this.usersMap[user.id] = user.name;
    });
    this.requestUserName = this.usersMap[this.requestUserId] || 'Desconocido';
  }

  protected goToChat() {
    this.router.navigate(['/app/chat', this.chatGroupId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
