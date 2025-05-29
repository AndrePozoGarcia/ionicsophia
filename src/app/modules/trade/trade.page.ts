import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { acceptedBooks, books, tradeBooks } from 'src/app/core/constants/books';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class TradePage implements OnInit {
  protected selectedTab: 'pending' | 'accepted' = 'pending';
  protected pendingBooks = books;
  protected waitingBooks = tradeBooks;
  protected acceptedBooks = acceptedBooks;

  constructor(private navCtrl: NavController, private router: Router, private notificationsService: NotificationService) { }

  ngOnInit() {
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected acceptTradeBook(bookId: number) {
    //aca actualizas los estados y te recuperas nuevamente los libros(desde el backend) que estan a la espera de ser aceptados/rechazados
    this.pendingBooks = this.pendingBooks.filter((book) => book.id !== bookId);
    this.router.navigate(['/app/request-your-accepted', bookId]);
    this.notificationsService.showToast('Solicitud aceptada', 'success');
  }

  protected rejectTradeBook(bookId: number) {
    this.pendingBooks = this.pendingBooks.filter((book) => book.id !== bookId);
    this.notificationsService.showToast('Solicitud rechazada', 'danger');
  }

  protected goToRequestBook(bookId: number) {
    this.router.navigate(['/app/request-sent', bookId]);
  }

  protected goToAcceptedBook(bookId: number) {
    this.router.navigate(['/app/request-that-be-accepted', bookId]);
  }
}
