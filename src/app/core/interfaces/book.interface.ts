import { BookTradeStatus } from "../enums/book-trade-status.enum";

export interface Book {
  id?: any,

  name: string,
  img: string,
  qrImg: string,
  description: string,
  price: number,

  distance: number;

  categories: string[];

  userId: any;
  userUserName: string;

  requestUsersIds: RequestBook[];

  review: number;
  author: string;
  bookStatus: string;
  cover: string;
  
  sinceTime: string;

  soldOut: boolean;
}

export interface RequestBook {
  id: string;
  tradeStatus?: BookTradeStatus,
  userId: string;
  requestUserId: string;
}