import { User } from "../interfaces/user.interface";

export const users: User[] = [
  {
    id: 0,
    username: 'juan.jose',
    email: 'juan.jose@gmail.com',
    password: '123456',
    name: 'Juan Jose',
    isNewUser: true,
    img: 'assets/img/user1.png',
    phone: "72324252",
    location: "Calle 123, Ciudad de Mexico",
    cardNumber: "Mastercard ending in 5678",
    giftBalance: 21
  },
  {
    id: 1,
    username: 'maria.galindo',
    email: 'maria.galindo@gmail.com',
    password: '123456',
    name: 'Maria Galindo',
    isNewUser: false,
    img: 'assets/img/user2.png',
    phone: "72324253",
    location: "Calle 456, Ciudad de Mexico",
    cardNumber: "Visa ending in 1234",
    giftBalance: 32
  },
  {
    id: 2,
    username: 'luis.ortega',
    email: 'luis.ortega@gmail.com',
    password: '123456',
    name: 'Luis Ortega',
    isNewUser: true,
    img: 'assets/img/user3.png',
    phone: "72324254",
    location: "Av. Reforma 100, Ciudad de Mexico",
    cardNumber: "Visa ending in 8765",
    giftBalance: 15
  },
  {
    id: 3,
    username: 'ana.morales',
    email: 'ana.morales@gmail.com',
    password: '123456',
    name: 'Ana Morales',
    isNewUser: false,
    img: 'assets/img/user4.png',
    phone: "72324255",
    location: "Calle 789, Monterrey",
    cardNumber: "Mastercard ending in 4321",
    giftBalance: 45
  },
  {
    id: 4,
    username: 'carlos.rivas',
    email: 'carlos.rivas@gmail.com',
    password: '123456',
    name: 'Carlos Rivas',
    isNewUser: false,
    img: 'assets/img/user5.png',
    phone: "72324256",
    location: "Blvd. del Norte 200, Guadalajara",
    cardNumber: "Visa ending in 1122",
    giftBalance: 8
  }
];
