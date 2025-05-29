import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { books } from 'src/app/core/constants/books';
import { Book } from 'src/app/core/interfaces/book.interface';
import { NotificationService } from 'src/app/core/services/toast.service';
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

  stars = Array(5).fill(0);

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = books[id];
  }

  goToReviews() {
    this.router.navigate(['./book-review']);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected toggleFavorite() {
    this.notificationService.showToast('Agregado a favoritos', 'success');
  }

  async openExchangeModal() {
    console.log(this.book);

    const modal = await this.modalController.create({
      component: ExchangeRequestModalComponent,
      componentProps: {
        img: '/assets/img/qr-code.png',
        price: 100,
        fee: 5,
        bookId: this.book.id,
      },
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      showBackdrop: true,
      backdropDismiss: true,
    });

    await modal.present();
  }

}
