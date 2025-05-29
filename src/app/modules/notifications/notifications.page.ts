import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { notifications } from 'src/app/core/constants/notifications';
import { Notification } from 'src/app/core/interfaces/notification.interface';
import { NotificationTypeEnum } from 'src/app/core/enums/notification-type.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class NotificationsPage implements OnInit {
  showOnlyUnread = false;
  allNotifications: Notification[] = notifications;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() { }

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

    switch (notification.type) {
      case NotificationTypeEnum.TRADE_REQUEST || NotificationTypeEnum.TRADE_REQUEST_ACCEPTED || NotificationTypeEnum.TRADE_REQUEST_REJECTED:
        this.router.navigate(['/app/trade']);
        break;
      case NotificationTypeEnum.CHAT_REQUEST || NotificationTypeEnum.CHAT_REQUEST_ACCEPTED:
        this.router.navigate(['/app/profile/', notification.data.userId]);
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
