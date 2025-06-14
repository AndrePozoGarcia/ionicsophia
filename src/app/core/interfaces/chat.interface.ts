export interface ChatGroup {
  id: any,

  user1Id: any,
  user1Name: string,
  user1Img: string,
  
  user2Id: any,
  user2Name: string,
  user2Img: string,

  bookId: any,
  bookName: string,

  chats: Chat[];
}

export interface Chat {
  id: any,

  userId: any,
  message: string,
  img?: string,
  createdAt: any,
}