import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Notification } from 'src/app/core/interfaces/notification.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { MyNotificationsService } from 'src/app/core/services/my-notifications.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export default class HomePage implements OnInit {
  protected userLogged: User;
  protected books: Book[] = [];
  protected booksByCategory: Book[] = [];
  protected categories: Category[] = [];
  protected notifications: Notification[] = [];
  protected searchTerm: string = '';
  protected filteredBooks: Book[] = [];

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private myNotificationService: MyNotificationsService,
    private booksService: BooksService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUserLogged();
    this.loadCategories();
    this.loadNotifications();
    this.loadBooks();
  }
  protected onSearchChange(event: any) {
    const value = event.detail.value?.toLowerCase() || '';
    this.searchTerm = value;

    if (!value.trim()) {
      this.filteredBooks = [];
      return;
    }

    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().includes(value) ||
      book.author?.toLowerCase().includes(value) ||
      book.cover?.toLowerCase().includes(value)
    );
  }

  protected goToBook(id: number, _list?: Book[]) {
    this.router.navigate(['/app/trades/', id]);
  }

  protected goToCategory(category: Category) {
    console.log('category', category.id, category.name);
  }

  protected async getUserLogged() {
    this.userLogged = await this.usersService.getCurrentUser();
  }

  protected async loadBooks() {
    this.books = await this.booksService.getBooks();
    this.booksByCategory = this.books.filter(book =>
      book.categories.some(category =>
        this.userLogged.favoriteCategoriesNames
          .map(c => c.toLowerCase())
          .includes(category.toLowerCase())
      )
    );
    this.booksByCategory = this.booksByCategory.filter(book => book.userId !== this.userLogged.id);
  }

  protected async loadCategories() {
    this.categories = await this.categoriesService.getCategories();
  }

  protected async loadNotifications() {
    this.notifications = await this.myNotificationService.getNotifications();
    this.notifications = this.notifications.filter(n => !n.readIt && n.ownerId === this.userLogged.id);
  }
}
