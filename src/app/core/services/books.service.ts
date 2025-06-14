import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, getDocs, where, updateDoc } from '@angular/fire/firestore';
import { Book } from '../interfaces/book.interface';
import { ChatGroup } from '../interfaces/chat.interface';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private firestore: Firestore) { }

  async addBook(book: Book) {
    const booksRef = collection(this.firestore, 'books');
    await addDoc(booksRef, book);
  }

  public async getBooks(): Promise<Book[]> {
    const booksQuery = query(collection(this.firestore, 'books'));
    const querySnapshot = await getDocs(booksQuery);
    const books: Book[] = [];

    querySnapshot.forEach((doc) => {
      books.push((doc.data() as Book));
    });

    return books;
  }

  public async getBookById(bookId: string): Promise<Book | null> {
    const q = query(
      collection(this.firestore, 'books'),
      where('id', '==', bookId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }
    return querySnapshot.docs[0].data() as Book;
  }

  public async updateBookById(bookId: string, updatedData: Partial<Book>): Promise<void> {
    const q = query(
      collection(this.firestore, 'books'),
      where('id', '==', bookId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Book with id ${bookId} not found.`);
    }

    const docRef = querySnapshot.docs[0].ref;
    await updateDoc(docRef, updatedData);
  }

  async addChatGroup(chatGroup: ChatGroup) {
    const chatGroupsRef = collection(this.firestore, 'chatGroups');
    await addDoc(chatGroupsRef, chatGroup);
  }

  public async getBookByBookId(bookId: string): Promise<Book | null> {
    const q = query(
      collection(this.firestore, 'books'),
      where('id', '==', bookId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs[0].data() as Book;
  }
}
