import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc, addDoc, collection, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';
import { User } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  public async addUser(user: User) {
    const userRef = collection(this.firestore, 'users');
    await addDoc(userRef, user);
  }

  public async getUsers(): Promise<User[]> {
    const usersQuery = query(collection(this.firestore, 'users'));
    const querySnapshot = await getDocs(usersQuery);
    const users: User[] = [];

    querySnapshot.forEach((doc) => {
      users.push((doc.data() as User));
    });

    return users;
  }

  public deleteUser(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userDocRef);
  }

  public async getUserByUserId(userId: string): Promise<User | null> {
    const q = query(
      collection(this.firestore, 'users'),
      where('id', '==', userId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs[0].data() as User;
  }

  public async updateUserByUserId(userId: string, updatedData: Partial<User>): Promise<void> {
    const q = query(
      collection(this.firestore, 'users'),
      where('id', '==', userId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`User with id ${userId} not found.`);
    }

    const docRef = querySnapshot.docs[0].ref;
    await updateDoc(docRef, updatedData);
  }

  public async getCurrentUser(): Promise<User> {
    return await this.getUserByUserId(this.authService.getCurrentUserId() || '');
  }
}
