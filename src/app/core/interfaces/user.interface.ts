export interface User {
  id: any,

  username: string,
  email: string,
  password?: string,

  name: string,
  img: string,

  phone: string,
  location: string,
  homeLocation: string,
  workLocation: string,

  cardNumber: string,
  giftBalance: number,

  isNewUser?: boolean;

  favoriteCategoriesNames: string[],
  favoriteCategoriesIds: string[],
  
  favoriteBooks: string[],
}

export interface AuthUser {
  id: string,
  email: string,
  password: string,
}