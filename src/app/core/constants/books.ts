import { Book } from "../interfaces/book.interface";

export const books: Book[] = [
  {
    id: 0,
    name: 'A monster wants to eat me',
    img: 'assets/img/category-manga.png',
    distance: 1.5,

    userId: 1,
    userUserName: 'Maria',
    review: 4.5,
    author: 'John Doe',
    genere: 'Accion',
    bookStatus: 'Usado como nuevo',
    cover: 'Blanda',
    sinceTime: '45m',
  },
  {
    id: 1,
    name: '1984',
    img: 'assets/img/category-clasicos.png',
    distance: 2,

    userId: 2,
    userUserName: 'Luis',
    review: 3,
    author: 'George Orwell',
    genere: 'Ciencia ficcion',
    bookStatus: 'Usado como nuevo',
    cover: 'Dura',
    sinceTime: '5m',
  },
  {
    id: 2,
    name: 'Filosofix',
    img: 'assets/img/category-filosofia.png',
    distance: 5,

    userId: 3,
    userUserName: 'Ana',
    review: 3,
    author: 'Javier Ruiz',
    genere: 'Filosofia',
    bookStatus: 'Usado como nuevo',
    cover: 'Dura',
    sinceTime: '1d',
  },
  {
    id: 3,
    name: 'One Piece VOL. I',
    img: 'assets/img/one-piece.png',
    distance: 1.5,

    userId: 4,
    userUserName: 'Carlos',
    review: 5,
    author: 'Eiichiro Oda',
    genere: 'Accion',
    bookStatus: 'Usado como nuevo',
    cover: 'Blanda',
    sinceTime: '15m',
  },
  {
    id: 4,
    name: 'Los Renegados',
    img: 'assets/img/renegados.png',
    distance: 1.5,

    userId: 4,
    userUserName: 'Carlos',
    review: 3,
    author: 'Marrisa Meyer',
    genere: 'Accion',
    bookStatus: 'Usado como nuevo',
    cover: 'Dura',
    sinceTime: '1h',
  },
  {
    id: 5,
    name: 'Bajo la misma estrella',
    img: 'assets/img/bajolamismaestrella.png',
    distance: 1.5,

    userId: 4,
    userUserName: 'Carlos',
    review: 5,
    author: 'John Green',
    genere: 'Romance',
    bookStatus: 'Usado como nuevo',
    cover: 'Dura',
    sinceTime: '5m',
  },
  { id: 6, name: 'The drama with doomsday', img: 'assets/img/category-drama.png', distance: 3, sinceTime: '2m', userUserName: 'Ana', userId: 3 },
  { id: 7, name: 'Charly y la fabrica de chocolate', img: 'assets/img/category-infantil.png', distance: 4, sinceTime: '2h', userUserName: 'Ana', userId: 3 },
  { id: 8, name: 'Night of terror', img: 'assets/img/category-terror.png', distance: 10, sinceTime: '10m', userUserName: 'Maria', userId: 1 },
]

export const tradeBooks: Book[] = [
  { id: 0, name: 'The drama with doomsday', img: 'assets/img/category-drama.png', distance: 3, sinceTime: '2m', userUserName: 'Santiago' },
  { id: 1, name: 'Charly y la fabrica de chocolate', img: 'assets/img/category-infantil.png', distance: 4, sinceTime: '2h', userUserName: 'Margaret' },
  { id: 2, name: 'Night of terror', img: 'assets/img/category-terror.png', distance: 10, sinceTime: '10m', userUserName: 'Fabio' },
]

export const acceptedBooks: Book[] = [
  { id: 0, name: 'Charly y la fabrica de chocolate', img: 'assets/img/category-infantil.png', distance: 4, sinceTime: '1d', userId: 1, userUserName: 'Maria' },
]