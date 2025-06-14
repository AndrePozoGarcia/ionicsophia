import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { Forum } from '../interfaces/forum.interface';

@Injectable({ providedIn: 'root' })
export class ForumsService {
  constructor(private firestore: Firestore) { }

  public async addForum(forum: Forum) {
    const userRef = collection(this.firestore, 'forums');
    await addDoc(userRef, forum);
  }

  public async getForums(): Promise<Forum[]> {
    const forumsQuery = query(collection(this.firestore, 'forums'));
    const querySnapshot = await getDocs(forumsQuery);
    const forums: Forum[] = [];

    querySnapshot.forEach((doc) => {
      forums.push((doc.data() as Forum));
    });

    return forums;
  }
}