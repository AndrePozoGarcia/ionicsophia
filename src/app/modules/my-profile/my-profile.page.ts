import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { Book } from 'src/app/core/interfaces/book.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { BooksService } from 'src/app/core/services/books.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export default class MyProfilePage implements OnInit {
  private books: Book[] = [];

  protected userLogged: User;
  protected myBooks: Book[] = [];
  protected favoriteBooks: Book[] = [];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private booksService: BooksService,
  ) { }

  async ngOnInit() {
    await this.setUserLogged();
    this.loadBooks();
  }

  private async setUserLogged() {
    const userId = this.authService.getCurrentUserId();
    this.userLogged = await this.usersService.getUserByUserId(userId);
  }

  private async loadBooks() {
    this.books = await this.booksService.getBooks();
    this.myBooks = this.books.filter(book => book.userId === this.userLogged.id);
    this.favoriteBooks = this.books.filter(book => this.userLogged.favoriteBooks.includes(book.id));
  }

  protected getUserProfileImage(image: string): string {
    return !!image ? image : 'assets/img/users/default-user.png';
  }

  protected goToBook(id: number, _list?: Book[]) {
    this.router.navigate(['/app/trades/', id]);
  }

  protected goToRegisterBook() {
    this.router.navigate(['/register-book']);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected async logOut() {
    try {
      await this.authService.logOut();
      this.router.navigate(['/login']);
      this.notificationService.showToast('Sesión cerrada', 'success');
    } catch (error) {
      this.notificationService.showToast('Error al cerrar sesión', 'danger');
    }
  }
}
