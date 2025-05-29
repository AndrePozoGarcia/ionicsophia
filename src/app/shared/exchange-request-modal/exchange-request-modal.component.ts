import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-request-modal',
  templateUrl: './exchange-request-modal.component.html',
  styleUrls: ['./exchange-request-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ExchangeRequestModalComponent {
  @Input() bookId: number;
  @Input() img: string;
  @Input() price: number;
  @Input() fee: number;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  get total() {
    return this.price + this.fee;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  verifyPayment() {
    this.modalCtrl.dismiss();

    setTimeout(() => {
      this.router.navigate(['/app/request-your-accepted', this.bookId]);
    }, 1000)
  }
}
