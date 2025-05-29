import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { events } from 'src/app/core/constants/event';
import { clubs } from 'src/app/core/constants/club';
import { CalendarClub } from 'src/app/core/interfaces/calendar-club';
import { CalendarEvent } from 'src/app/core/interfaces/calendar-event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export default class CalendarPage implements OnInit {
  events: CalendarEvent[] = events;
  clubs: CalendarClub[] = clubs;

  constructor(
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.events = events;
    this.clubs = clubs;
  }

  goBack() {
    this.navCtrl.back();
  }

  goToDetailsEvent(id: number) {
    this.router.navigate(['/app/event-detail/', id]);
  }

  goToDetailsClub(id: number) {
    this.router.navigate(['/app/club-detail/', id]);
  }


  goToCreateEvent() {
    this.router.navigate(['/create-event']);
  }
  goToCreateClub() {
    this.router.navigate(['/create-club']);
  }

}
