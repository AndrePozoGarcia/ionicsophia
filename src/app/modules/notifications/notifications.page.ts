import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Notification } from 'src/app/core/interfaces/notification.interface';
import { NotificationTypeEnum } from 'src/app/core/enums/notification-type.enum';
import { Router } from '@angular/router';
import { MyNotificationsService } from 'src/app/core/services/my-notifications.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class NotificationsPage implements OnInit {
  protected showOnlyUnread = false;
  protected userLogged: User;
  protected allNotifications: Notification[] = [];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private myNotificationService: MyNotificationsService,
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.loadNotifications();
  }

  private async getCurrentUser() {
    this.userLogged = await this.userService.getCurrentUser();
  }

  private async loadNotifications() {
    try {
      const notifications = await this.myNotificationService.getNotifications();
      if (notifications.length === 0) {
        console.warn('No notifications found.');
      }else{
        this.allNotifications = notifications.filter(n => n.ownerId === this.userLogged.id);
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected get filteredNotifications(): Notification[] {
    if (this.showOnlyUnread) {
      return this.allNotifications.filter(n => !n.readIt);
    }
    return this.allNotifications;
  }

  protected goToNotificationReference(notification: Notification) {
    notification.readIt = true;
    this.allNotifications = this.allNotifications.map(n => n.id === notification.id ? notification : n);
    this.myNotificationService.updateNotificationById(notification.id, notification);

    switch (notification.type) {
      case NotificationTypeEnum.TRADE_REQUEST || NotificationTypeEnum.TRADE_REQUEST_ACCEPTED || NotificationTypeEnum.TRADE_REQUEST_REJECTED:
        //this.router.navigate(['/app/trade']);
        break;
      case NotificationTypeEnum.CHAT_REQUEST || NotificationTypeEnum.CHAT_REQUEST_ACCEPTED:
        //this.router.navigate(['/app/profile/', notification.data.userId]);
        // Agregar navegacion que redirija al chat '/app/chat/', notification.data.chatId || de momento yo hare que redirija al perfil de usuario
        break;
      case NotificationTypeEnum.USER_REVIEW:
        //this.router.navigate(['/app/my-profile/ratings']);
        break;
      default:
        // Agregas accion por defecto en caso de que no se encuentre el tipo de notificacion
        break;
    }
  }
}
