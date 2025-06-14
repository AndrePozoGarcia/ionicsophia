import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { events } from 'src/app/core/constants/event';
import { clubs } from 'src/app/core/constants/club';
import { CalendarClub } from 'src/app/core/interfaces/calendar-club';
import { CalendarEvent } from 'src/app/core/interfaces/calendar-event';
import { EventsService } from 'src/app/core/services/events.service';
import { ClubsService } from 'src/app/core/services/club.service';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export default class CalendarPage implements OnInit {
  events: CalendarEvent[] = [];
  clubs: CalendarClub[] = [];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private eventsService: EventsService,
    private clubsService: ClubsService,
    private calendarService: CalendarService
  ) { }

  async ngOnInit() {
    this.events = await this.eventsService.getEvents();
    this.clubs = await this.clubsService.getClubs();

    this.getCreationTrigger();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToDetailsEvent(id: string) {
    this.router.navigate(['/app/event-detail/', id]);
  }

  goToDetailsClub(id: string) {
    this.router.navigate(['/app/club-detail/', id]);
  }

  goToCreateEvent() {
    this.router.navigate(['/create-event']);
  }
  goToCreateClub() {
    this.router.navigate(['/create-club']);
  }

  private getCreationTrigger() {
    this.calendarService.getUpdateTrigger().subscribe(async _a => {
      this.events = await this.eventsService.getEvents();
      this.clubs = await this.clubsService.getClubs();
    })
  }

}
