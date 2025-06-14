import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { FormsModule } from '@angular/forms';
import { BookFilter } from 'src/app/core/enums/book-filter.enum';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.page.html',
  styleUrls: ['./search-books.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export default class SearchBooksPage implements OnInit {
  protected userLogged: User;
  
  protected books: Book[] = [];
  protected filteredBooks: Book[] = [];

  protected searchTerm: string = '';
  protected selectedFilter: keyof typeof BookFilter = 'name';

  protected bookFilter = BookFilter;
  protected filterKeys = Object.keys(BookFilter) as (keyof typeof BookFilter)[];

  constructor(
    private navCtrl: NavController,
    private booksService: BooksService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.loadBooks();
  }

  protected goBack() {
    this.navCtrl.back();
  }

  private async getCurrentUser() {
    this.userLogged = await this.usersService.getCurrentUser();
  }

  protected async loadBooks() {
    this.books = await this.booksService.getBooks();
    this.books = this.books.filter(book => book.userId !== this.userLogged.id);
    this.filteredBooks = [...this.books];
  }

  private filterKeyMap: Record<keyof typeof BookFilter, keyof Book> = {
    name: 'name',
    author: 'author',
    cover: 'cover',
    categories: 'categories'
  };

  protected applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    const filterKey = this.selectedFilter;
    const bookKey = this.filterKeyMap[filterKey];

    this.filteredBooks = this.books.filter(book => {
      const value = book[bookKey];

      if (Array.isArray(value)) {
        return value.some(v => v.toLowerCase().includes(term));
      }

      return value?.toString().toLowerCase().includes(term);
    });
  }

  protected goToBook(id: number) {
    this.navCtrl.navigateForward(`/app/trades/${id}`);
  }
}