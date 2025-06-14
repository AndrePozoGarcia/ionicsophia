import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CalendarEvent } from 'src/app/core/interfaces/calendar-event';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class EventDetailPage implements OnInit {
  protected event: CalendarEvent;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private eventsService: EventsService,
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const events = await this.eventsService.getEvents();
    this.event = events.find(event => event.id == id);
  }

  goBack() {
    this.navCtrl.back();
  }

}
