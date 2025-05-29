import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forumComments } from 'src/app/core/constants/forum-comments';
import { ForumComment } from 'src/app/core/interfaces/forum-comment.interface';
import { forums } from 'src/app/core/constants/forums';
import { Forum } from 'src/app/core/interfaces/forum.interface';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './forum-discussion.page.html',
  styleUrls: ['./forum-discussion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class ForumDiscussionPage implements OnInit {
  protected forumId: number;
  protected forum: Forum | undefined;
  protected comments: ForumComment[] = [];
  protected newComment: string = '';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.forumId = Number(this.route.snapshot.paramMap.get('id'));
    this.comments = forumComments.filter(c => c.forumId === this.forumId);
    this.forum = forums.find(f => f.id === this.forumId);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected get orderedComments(): ForumComment[] {
    return [...this.comments].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  protected submitComment() {
    if (!this.newComment.trim()) return;

    const newForumComment: ForumComment = {
      id: Date.now(),
      createdAt: new Date(),
      comment: this.newComment,
      forumId: this.forumId,
      userId: 99,
      userName: 'Tú',
      userImg: 'assets/img/users/default-user.png',
    };

    this.comments.push(newForumComment);
    this.newComment = '';
  }

}