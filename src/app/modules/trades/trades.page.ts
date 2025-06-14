import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';
import { ExchangeRequestModalComponent } from 'src/app/shared/exchange-request-modal/exchange-request-modal.component';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.page.html',
  styleUrls: ['./trades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class TradesPage implements OnInit {
  book: Book;
  userLogged: User;

  stars = Array(5).fill(0);

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private modalController: ModalController,
    private booksService: BooksService,
    private usersService: UsersService,
  ) { }

  async ngOnInit() {
    this.userLogged = await this.usersService.getCurrentUser();
    const id = this.route.snapshot.paramMap.get('id');
    this.book = await this.booksService.getBookById(id);
  }

  goToReviews() {
    this.router.navigate(['./book-review', this.book.id]);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected toggleFavorite() {
    if (this.userLogged.favoriteBooks.includes(this.book.id)) {
      this.notificationService.showToast('Este libro ya se encuentra en sus favoritos', 'warning');
    } else {
      this.userLogged.favoriteBooks.push(this.book.id);
      this.usersService.updateUserByUserId(this.userLogged.id, { favoriteBooks: this.userLogged.favoriteBooks });
      this.notificationService.showToast('Agregado a favoritos', 'success');
    }
  }

  async openExchangeModal() {
    const modal = await this.modalController.create({
      component: ExchangeRequestModalComponent,
      componentProps: {
        img: `/${this.book.qrImg}`,
        price: this.book.price,
        fee: 5,
        bookId: `${this.userLogged.id}.${this.book.id}.${this.book.userId}`,
      },
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      showBackdrop: true,
      backdropDismiss: true,
    });

    await modal.present();
  }

}
