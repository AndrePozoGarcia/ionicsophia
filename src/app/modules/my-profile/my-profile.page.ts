import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { books, tradeBooks } from 'src/app/core/constants/books';
import { users } from 'src/app/core/constants/users';
import { Book } from 'src/app/core/interfaces/book.interface';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class MyProfilePage implements OnInit {

  protected userLogged: User = users[0];
  protected tradeBooks: Book[] = tradeBooks;
  protected favoriteBooks: Book[] = books;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  protected goToBook(id: number, list: Book[]) {
    const bookName = list[id].name;
    const bookId = books.findIndex((book) => book.name === bookName);
    this.router.navigate(['/app/trades/', bookId]);
  }

  protected goToAddBook() {
    console.log('addbook');
  }

  protected goToRegisterBook() {
    this.router.navigate(['/register-book']);
  }

  protected goBack() {
    this.navCtrl.back();
  }

}
