import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { users } from 'src/app/core/constants/users';
import { Book } from 'src/app/core/interfaces/book.interface';
import { books, tradeBooks } from 'src/app/core/constants/books';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule],
})

export default class ProfilePage implements OnInit {
  protected user: User;
  protected tradeBooks: Book[] = tradeBooks;

  private userId: number;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.user = users[this.userId];
    // Aquí puedes hacer una llamada al backend para obtener los datos del usuario
    console.log('User ID:', this.userId);
  }

  protected goBack() {
    this.navCtrl.back();

  }

  protected goToBook(id: number, list: Book[]) {
    const bookName = list[id].name;
    const bookId = books.findIndex((book) => book.name === bookName);
    this.router.navigate(['/app/trades/', bookId]);
  }

}

