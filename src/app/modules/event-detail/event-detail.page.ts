import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { events } from 'src/app/core/constants/event';
import { CalendarEvent } from 'src/app/core/interfaces/calendar-event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export default class EventDetailPage implements OnInit {
  event: CalendarEvent;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = events[id];
  }

  goBack() {
    this.navCtrl.back();
  }

}
