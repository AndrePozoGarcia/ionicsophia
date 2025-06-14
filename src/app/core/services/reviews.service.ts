import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { ReviewBook } from '../interfaces/reviews-book';

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  constructor(private firestore: Firestore) { }

  public async addReview(review: ReviewBook) {
    const userRef = collection(this.firestore, 'reviews');
    await addDoc(userRef, review);
  }

  public async getReviews(): Promise<ReviewBook[]> {
    const reviewsQuery = query(collection(this.firestore, 'reviews'));
    const querySnapshot = await getDocs(reviewsQuery);
    const reviews: ReviewBook[] = [];

    querySnapshot.forEach((doc) => {
      reviews.push((doc.data() as ReviewBook));
    });

    return reviews;
  }
}