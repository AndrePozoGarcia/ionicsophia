import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Notification } from '../interfaces/notification.interface';

@Injectable({ providedIn: 'root' })
export class MyNotificationsService {
  constructor(private firestore: Firestore) { }

  async addNotification(notification: Notification) {
    const notificationsRef = collection(this.firestore, 'notifications');
    await addDoc(notificationsRef, notification);
  }

  public async getNotifications(): Promise<Notification[]> {
    const notificationsQuery = query(collection(this.firestore, 'notifications'));
    const querySnapshot = await getDocs(notificationsQuery);
    const notifications: Notification[] = [];

    querySnapshot.forEach((doc) => {
      notifications.push((doc.data() as Notification));
    });

    return notifications;
  }

  public async updateNotificationById(notificationId: string, updatedData: Partial<Notification>): Promise<void> {
    const q = query(
      collection(this.firestore, 'notifications'),
      where('id', '==', notificationId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Notification with id ${notificationId} not found.`);
    }

    const docRef = querySnapshot.docs[0].ref;
    await updateDoc(docRef, updatedData);
  }
}
