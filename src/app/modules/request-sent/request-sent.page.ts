import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { tradeBooks } from 'src/app/core/constants/books';
import { Book } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-request-sent',
  templateUrl: './request-sent.page.html',
  styleUrls: ['./request-sent.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class RequestSentPage implements OnInit {
  protected trade: Book;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    const tradeId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.trade = tradeBooks[tradeId];
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
