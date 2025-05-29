import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.page.html',
  styleUrls: ['./search-books.page.scss'],

  standalone: true,
  imports: [IonicModule],
})
export default class SearchBooksPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  protected goBack() {
    this.navCtrl.back();
  }

}
