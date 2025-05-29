import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { books, tradeBooks } from 'src/app/core/constants/books';
import { categories } from 'src/app/core/constants/categories';
import { notifications } from 'src/app/core/constants/notifications';
import { users } from 'src/app/core/constants/users';
import { Book } from 'src/app/core/interfaces/book.interface';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Notification } from 'src/app/core/interfaces/notification.interface';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule]
})
export default class HomePage implements OnInit {
  protected userLogged: User = users[0];
  protected books: Book[] = books;
  protected books2: Book[] = tradeBooks;
  protected notifications: Notification[] = notifications.filter(n => !n.readIt);
  protected categories: Category[] = categories;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  protected goToBook(id: number, list: Book[]) {
    const bookName = list[id].name;
    const bookId = books.findIndex((book) => book.name === bookName);
    this.router.navigate(['/app/trades/', bookId]);
  }

  protected goToCategory(id: number) {
    console.log('category', id);
  }
}
