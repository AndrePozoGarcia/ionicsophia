import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { CalendarEvent } from '../interfaces/calendar-event';

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(private firestore: Firestore) { }

  public async addEvent(event: CalendarEvent) {
    const userRef = collection(this.firestore, 'events');
    await addDoc(userRef, event);
  }

  public async getEvents(): Promise<CalendarEvent[]> {
    const eventsQuery = query(collection(this.firestore, 'events'));
    const querySnapshot = await getDocs(eventsQuery);
    const events: CalendarEvent[] = [];

    querySnapshot.forEach((doc) => {
      events.push((doc.data() as CalendarEvent));
    });

    return events;
  }
}