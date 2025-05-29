export interface Book {
  id: number,

  name: string,
  img: string,

  distance: number;

  categoryId?: number;
  
  userId?: number;
  userUserName?: string;
  review?: number;
  author?: string;
  genere?: string;
  bookStatus?: string;
  cover?: string;
  
  sinceTime?: string;
}