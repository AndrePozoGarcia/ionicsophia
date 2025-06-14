import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { BookTradeStatus } from 'src/app/core/enums/book-trade-status.enum';
import { NotificationTypeEnum } from 'src/app/core/enums/notification-type.enum';
import { Book } from 'src/app/core/interfaces/book.interface';
import { Notification } from 'src/app/core/interfaces/notification.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { MyNotificationsService } from 'src/app/core/services/my-notifications.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class TradePage implements OnInit {
  protected selectedTab: 'pending' | 'accepted' = 'pending';
  protected userLogged: User;
  protected usersMap: { [key: string]: string } = {};
  protected filteredBooks: Book[] = [];
  protected pendingForAccept: Book[] = [];
  protected waitingResponse: Book[] = [];
  protected yourAAcceptedBooks: Book[] = [];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private notificationsService: NotificationService,
    private myNotificationsService: MyNotificationsService,
    private usersService: UsersService,
    private bookService: BooksService,
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.loadUsers();
    this.loadBooksByUser();
  }

  private async loadUsers() {
    const users: User[] = await this.usersService.getUsers();
    this.usersMap = {};
    users.forEach(user => {
      this.usersMap[user.id] = user.name;
    });
  }

  private async getCurrentUser() {
    this.userLogged = await this.usersService.getCurrentUser();
  }

  private async loadBooksByUser() {
    const books = await this.bookService.getBooks();
    this.pendingForAccept = books.filter(book =>
      book.requestUsersIds?.some(request => request.userId == this.userLogged.id && request.tradeStatus == BookTradeStatus.ON_TRADE)
    );
    this.waitingResponse = books.filter(book =>
      book.requestUsersIds?.some(request => request.requestUserId == this.userLogged.id && request.tradeStatus == BookTradeStatus.ON_TRADE)
    );
    this.yourAAcceptedBooks = books.filter(book =>
      book.requestUsersIds?.some(request => request.userId == this.userLogged.id && request.tradeStatus == BookTradeStatus.ACCEPTED)
    );
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected acceptTradeBook(book: Book) {
    const requesterId = book.requestUsersIds[0].requestUserId;
    const acceptedRequest = {
      ...book.requestUsersIds[0],
      tradeStatus: BookTradeStatus.ACCEPTED
    };
    const bookUpdatePayload = {
      ...book,
      requestUsersIds: [acceptedRequest]
    };
    this.bookService.updateBookById(book.id, bookUpdatePayload);
    this.loadBooksByUser();

    const newNotification: Notification = {
      id: Date.now().toString(),
      summaryText: `Tu solicitud del libro ${book.name} fue aceptada.`,
      type: NotificationTypeEnum.TRADE_REQUEST_ACCEPTED,
      readIt: false,
      date: undefined,
      data: {},
      ownerId: requesterId
    }
    this.myNotificationsService.addNotification(newNotification);

    this.router.navigate(['/app/request-your-accepted', `${book.requestUsersIds[0].requestUserId}.${book.id}.${this.userLogged.id}`]);
    this.notificationsService.showToast('Solicitud aceptada', 'success');
  }

  protected rejectTradeBook(book: Book) {
    const requesterId = book.requestUsersIds[0].requestUserId;

    const rejectedRequest = {
      ...book.requestUsersIds[0],
      tradeStatus: BookTradeStatus.REJECTED
    };
    const remainingRequests = book.requestUsersIds.slice(1);
    const updatedRequests = [...remainingRequests, rejectedRequest];
    const bookUpdatePayload: Book = {
      ...book,
      requestUsersIds: updatedRequests
    };
    this.bookService.updateBookById(book.id, bookUpdatePayload);
    this.loadBooksByUser();

    const newNotification: Notification = {
      id: Date.now().toString(),
      summaryText: `Tu solicitud del libro ${book.name} fue rechazada.`,
      type: NotificationTypeEnum.TRADE_REQUEST_REJECTED,
      readIt: false,
      date: undefined,
      data: {},
      ownerId: requesterId
    }
    this.myNotificationsService.addNotification(newNotification);
    this.notificationsService.showToast('Solicitud rechazada', 'danger');
  }

  protected goToRequestBook(book: Book) {
    this.router.navigate(['/app/request-sent', `${book.requestUsersIds[0].requestUserId}.${book.id}.${book.requestUsersIds[0].userId}`]);
  }

  protected goToAcceptedBook(book: Book) {
    this.router.navigate(['/app/request-that-be-accepted', `${book.requestUsersIds[0].userId}.${book.id}.${book.requestUsersIds[0].requestUserId}`]);
  }
}
