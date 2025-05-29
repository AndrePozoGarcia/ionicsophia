export interface User {
  id: number,

  username: string,
  email: string,
  password: string,

  name: string,
  img: string,

  phone: string,
  location: string,
  homeLocation?: string,
  workLocation?: string,

  cardNumber: string,
  giftBalance: number,

  isNewUser: boolean;

}