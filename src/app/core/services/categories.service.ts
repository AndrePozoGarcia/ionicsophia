import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private firestore: Firestore) { }

  async addCategory(category: Category) {
    const categoriesRef = collection(this.firestore, 'categories');
    await addDoc(categoriesRef, category);
  }

  public async getCategories(): Promise<Category[]> {
    const categoriesQuery = query(collection(this.firestore, 'categories'));
    const querySnapshot = await getDocs(categoriesQuery);
    const categories: Category[] = [];

    querySnapshot.forEach((doc) => {
      categories.push((doc.data() as Category));
    });

    return categories;
  }
}