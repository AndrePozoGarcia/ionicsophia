export interface ForumComment {
  id: string,
  createdAt: string,
  comment: string,
  imgAttached?: string,

  forumId?: string,
  userId?: string,

  userName?: string,
  userImg?: string,
}