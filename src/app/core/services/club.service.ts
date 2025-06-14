import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { CalendarClub } from '../interfaces/calendar-club';

@Injectable({ providedIn: 'root' })
export class ClubsService {
  constructor(private firestore: Firestore) { }

  public async addClub(club: CalendarClub) {
    const userRef = collection(this.firestore, 'clubs');
    await addDoc(userRef, club);
  }

  public async getClubs(): Promise<CalendarClub[]> {
    const clubsQuery = query(collection(this.firestore, 'clubs'));
    const querySnapshot = await getDocs(clubsQuery);
    const clubs: CalendarClub[] = [];

    querySnapshot.forEach((doc) => {
      clubs.push((doc.data() as CalendarClub));
    });

    return clubs;
  }
}