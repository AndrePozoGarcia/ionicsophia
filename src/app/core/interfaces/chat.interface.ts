export interface ChatGroup {
  id: number,

  userLoggedId: number,
  userLoggedName: string,
  userLoggedImg: string,
  
  user2Id: number,
  user2Name: string,
  user2Img: string,

  bookId: number,
  bookName: string,

  chats: Chat[];
}

export interface Chat {
  id: number,

  userId: number,
  message: string,
  img?: string,
  createdAt: Date,
}