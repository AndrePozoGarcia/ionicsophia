import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { ForumComment } from '../interfaces/forum-comment.interface';

@Injectable({ providedIn: 'root' })
export class ForumCommentsService {
  constructor(private firestore: Firestore) { }

  public async addForumComment(forumComment: ForumComment) {
    const userRef = collection(this.firestore, 'forumComments');
    await addDoc(userRef, forumComment);
  }

  public async getForumComments(): Promise<ForumComment[]> {
    const forumCommentsQuery = query(collection(this.firestore, 'forumComments'));
    const querySnapshot = await getDocs(forumCommentsQuery);
    const forumComments: ForumComment[] = [];

    querySnapshot.forEach((doc) => {
      forumComments.push((doc.data() as ForumComment));
    });

    return forumComments;
  }
}