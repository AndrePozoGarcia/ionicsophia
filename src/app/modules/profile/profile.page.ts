import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { users } from 'src/app/core/constants/users';
import { Book } from 'src/app/core/interfaces/book.interface';
import { books, tradeBooks } from 'src/app/core/constants/books';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/core/services/users.service';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule],
})

export default class ProfilePage implements OnInit {
  protected user: User;
  protected myBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private usersService: UsersService,
    private booksService: BooksService
  ) { }

  async ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id') as unknown as string;
    this.user = await this.usersService.getUserByUserId(userId);
    const books = await this.booksService.getBooks();
    this.myBooks = books.filter(book => book.userId == userId);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected goToBook(id: number, list: Book[]) {
    this.router.navigate(['/app/trades/', id]);
  }

}

