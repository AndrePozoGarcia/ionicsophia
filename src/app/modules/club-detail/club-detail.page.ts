import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { clubs } from 'src/app/core/constants/club';
import { CalendarClub } from 'src/app/core/interfaces/calendar-club';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.page.html',
  styleUrls: ['./club-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class ClubDetailPage implements OnInit {
  club: CalendarClub;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.club = clubs[id]
  }

  goBack() {
    this.navCtrl.back();
  }

}
