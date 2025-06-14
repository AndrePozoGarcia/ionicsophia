import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CalendarClub } from 'src/app/core/interfaces/calendar-club';
import { ClubsService } from 'src/app/core/services/club.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.page.html',
  styleUrls: ['./club-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class ClubDetailPage implements OnInit {
  protected club: CalendarClub;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private clubsService: ClubsService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const clubs = await this.clubsService.getClubs();
    this.club = clubs.find(club => club.id == id);
  }

  goBack() {
    this.navCtrl.back();
  }
}
