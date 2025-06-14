import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForumComment } from 'src/app/core/interfaces/forum-comment.interface';
import { Forum } from 'src/app/core/interfaces/forum.interface';
import { ForumsService } from 'src/app/core/services/forum.service';
import { ForumCommentsService } from 'src/app/core/services/forum-comments.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { forumComments } from 'src/app/core/constants/forum-comments';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './forum-discussion.page.html',
  styleUrls: ['./forum-discussion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class ForumDiscussionPage implements OnInit {
  protected forumId: string;
  protected forum: Forum | undefined;
  protected comments: ForumComment[] = [];
  protected newComment: string = '';
  protected userLogged: User;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private forumsService: ForumsService,
    private forumCommentsService: ForumCommentsService,
    private usersService: UsersService,
  ) { }

  async ngOnInit() {
    this.forumId = this.route.snapshot.paramMap.get('id');

    this.userLogged = await this.usersService.getCurrentUser();
    const forumsFS = await this.forumsService.getForums();
    const forumComments = await this.forumCommentsService.getForumComments();

    this.comments = forumComments.filter(c => c.forumId == this.forumId);
    this.forum = forumsFS.find(f => f.id == this.forumId);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected get orderedComments(): ForumComment[] {
    return [...this.comments].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  protected async submitComment() {
    if (!this.newComment.trim()) return;

    const newForumComment: ForumComment = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      comment: this.newComment,
      forumId: this.forumId,
      userId: this.userLogged.id,
      userName: this.userLogged.username,
      userImg: this.userLogged.img,
    };

    this.forumCommentsService.addForumComment(newForumComment);

    const forumComments = await this.forumCommentsService.getForumComments();
    this.comments = forumComments.filter(c => c.forumId == this.forumId);

    this.newComment = '';
  }

}