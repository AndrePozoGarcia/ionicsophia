import { NotificationTypeEnum } from "../enums/notification-type.enum";
import { Notification } from "../interfaces/notification.interface";

export const notifications: Notification[] = [
  {
    id: '0',
    summaryText: 'Maria Galindo quiere chatear contigo.',
    type: NotificationTypeEnum.CHAT_REQUEST,
    readIt: false,
    date: new Date('2023-11-01'),
    data: {
      chatId: 1,
      userId: 1,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '1',
    summaryText: 'Lucia aceptó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_ACCEPTED,
    readIt: false,
    date: new Date('2023-10-01'),
    data: {
      tradeId: 2,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '2',
    summaryText: 'Jorge rechazó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_REJECTED,
    readIt: true,
    date: new Date('2023-09-25'),
    data: {
      tradeId: 3,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '3',
    summaryText: 'Tienes una nueva solicitud de intercambio de Camila.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: false,
    date: new Date('2023-12-10'),
    data: {
      tradeId: 4,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '4',
    summaryText: 'Juan aceptó tu solicitud de chat.',
    type: NotificationTypeEnum.CHAT_REQUEST_ACCEPTED,
    readIt: true,
    date: new Date('2023-08-20'),
    data: {
      chatId: 7,
      userId: 0,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '5',
    summaryText: 'Has recibido una nueva reseña de Ana.',
    type: NotificationTypeEnum.USER_REVIEW,
    readIt: false,
    date: new Date('2023-12-01'),
    data: {
      userId: 5,
      rating: 4.5,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: '6',
    summaryText: 'Valeria quiere intercambiar su libro contigo.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: true,
    date: new Date('2023-11-15'),
    data: {
      tradeId: 6,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },

  {
    id: 'a3g7sLkq92Wz',
    summaryText: 'Sofía quiere comenzar un chat contigo.',
    type: NotificationTypeEnum.CHAT_REQUEST,
    readIt: false,
    date: new Date('2024-01-12'),
    data: {
      chatId: 8,
      userId: 2,
    },
    ownerId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3'
  },
  {
    id: 'b92LmKpqd39V',
    summaryText: 'Carlos aceptó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_ACCEPTED,
    readIt: false,
    date: new Date('2024-01-03'),
    data: {
      tradeId: 9,
    },
    ownerId: 'dk4Uo3VpUOYvnGB3HwPdGLZb0M03'
  },
  {
    id: 'x7LmWpe1dA2z',
    summaryText: 'Tienes una nueva reseña de Miguel.',
    type: NotificationTypeEnum.USER_REVIEW,
    readIt: true,
    date: new Date('2023-12-22'),
    data: {
      userId: 6,
      rating: 5,
    },
    ownerId: 'OLTrCBEBYaa6kbcRSQcyH6e2yHs2'
  },
  {
    id: 'l8qWyZu93Npq',
    summaryText: 'Natalia rechazó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_REJECTED,
    readIt: false,
    date: new Date('2024-02-10'),
    data: {
      tradeId: 10,
    },
    ownerId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3'
  },
  {
    id: 'we8NzpqD32ll',
    summaryText: 'Luis quiere intercambiar su libro contigo.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: true,
    date: new Date('2023-12-30'),
    data: {
      tradeId: 11,
    },
    ownerId: 'cDyaIia9kZVdWqZGm32RFIJkNNJ3'
  },
  {
    id: 'dz9QlmA81XsT',
    summaryText: 'Claudia aceptó tu solicitud de chat.',
    type: NotificationTypeEnum.CHAT_REQUEST_ACCEPTED,
    readIt: false,
    date: new Date('2024-01-05'),
    data: {
      chatId: 9,
      userId: 4,
    },
    ownerId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3'
  },
  {
    id: 'mfQ98lWc01zz',
    summaryText: 'Recibiste una nueva reseña de Tomás.',
    type: NotificationTypeEnum.USER_REVIEW,
    readIt: false,
    date: new Date('2023-11-28'),
    data: {
      userId: 7,
      rating: 4.2,
    },
    ownerId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3'
  },
  {
    id: 'u91AeoP33dLa',
    summaryText: 'Luciana quiere intercambiar su libro contigo.',
    type: NotificationTypeEnum.TRADE_REQUEST,
    readIt: false,
    date: new Date('2024-02-02'),
    data: {
      tradeId: 12,
    },
    ownerId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3'
  },
  {
    id: 'pkWqzLAe3fLz',
    summaryText: 'Sebastián rechazó tu solicitud de chat.',
    type: NotificationTypeEnum.TRADE_REQUEST_REJECTED,
    readIt: true,
    date: new Date('2023-12-01'),
    data: {
      chatId: 10,
      userId: 1,
    },
    ownerId: 'dk4Uo3VpUOYvnGB3HwPdGLZb0M03'
  },
  {
    id: 'z1wQeLpD88Xc',
    summaryText: 'Andrés aceptó tu solicitud de intercambio.',
    type: NotificationTypeEnum.TRADE_REQUEST_ACCEPTED,
    readIt: false,
    date: new Date('2024-01-20'),
    data: {
      tradeId: 13,
    },
    ownerId: 'OLTrCBEBYaa6kbcRSQcyH6e2yHs2'
  }
];
