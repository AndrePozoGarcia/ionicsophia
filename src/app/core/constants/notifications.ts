import { NotificationTypeEnum } from "../enums/notification-type.enum";
import { Notification } from "../interfaces/notification.interface";

export const notifications: Notification[] = [
  {
    id: 0,
    summaryText: 'Maria Galindo quiere chatear contigo.',
    type: NotificationTypeEnum.CHAT_REQUEST,
    readIt: false,
    date: new Date('2023-11-01'),
    data: {
      chatId: 1,
      userId: 1,
    },
  },
  {
    id: 1,
    summaryText: 'Lucia aceptó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_ACCEPTED,
    readIt: false,
    date: new Date('2023-10-01'),
    data: {
      tradeId: 2,
    },
  },
  {
    id: 2,
    summaryText: 'Jorge rechazó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_REJECTED,
    readIt: true,
    date: new Date('2023-09-25'),
    data: {
      tradeId: 3,
    },
  },
  {
    id: 3,
    summaryText: 'Tienes una nueva solicitud de intercambio de Camila.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: false,
    date: new Date('2023-12-10'),
    data: {
      tradeId: 4,
    },
  },
  {
    id: 4,
    summaryText: 'Juan aceptó tu solicitud de chat.',
    type: NotificationTypeEnum.CHAT_REQUEST_ACCEPTED,
    readIt: true,
    date: new Date('2023-08-20'),
    data: {
      chatId: 7,
      userId: 0,
    },
  },
  {
    id: 5,
    summaryText: 'Has recibido una nueva reseña de Ana.',
    type: NotificationTypeEnum.USER_REVIEW,
    readIt: false,
    date: new Date('2023-12-01'),
    data: {
      userId: 5,
      rating: 4.5,
    },
  },
  {
    id: 6,
    summaryText: 'Valeria quiere intercambiar su libro contigo.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: true,
    date: new Date('2023-11-15'),
    data: {
      tradeId: 6,
    },
  },
];
