import { NotificationTypeEnum } from "../enums/notification-type.enum";

export interface Notification {
  id: any,

  summaryText: string,
  type: NotificationTypeEnum,
  readIt: boolean,
  date: Date,
  data: any,
  ownerId: string,
}