import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { Chat, ChatGroup } from '../interfaces/chat.interface';
import { db } from '../constants/firebase';
import { Firestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ChatService {
  getChatGroupRef(groupId: string) {
    return collection(db, 'chatGroups', groupId, 'chats');
  }

  listenToMessages(groupId: string, callback: (messages: Chat[]) => void) {
    const q = query(this.getChatGroupRef(groupId), orderBy('createdAt', 'asc'));
    return onSnapshot(q, (snapshot) => {
      const messages: Chat[] = snapshot.docs.map(doc => ({
        ...(doc.data() as Chat),
        createdAt: doc.data()['createdAt']?.toDate?.() ?? new Date()
      }));
      callback(messages);
    });
  }

  async sendMessage(groupId: string, message: Omit<Chat, 'id'>) {
    await addDoc(this.getChatGroupRef(groupId), {
      ...message,
      createdAt: serverTimestamp()
    });
  }
}
