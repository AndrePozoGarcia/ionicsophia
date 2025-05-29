export interface ForumComment {
  id: number,
  createdAt: Date,
  comment: string,
  imgAttached?: string,

  forumId?: number,
  userId?: number,

  userName?: string,
  userImg?: string,
}