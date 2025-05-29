import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { forums } from 'src/app/core/constants/forums';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class ForumPage implements OnInit {
  protected forums = forums;
  protected isModalOpen = false;
  protected newForumTitle = '';

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  protected openModal() {
    this.newForumTitle = '';
    this.isModalOpen = true;
  }

  protected createForum() {
    const newForum = {
      id: this.forums.length,
      title: this.newForumTitle,
      createdBy: 'Ti',
    };
    this.forums.push(newForum);
    this.isModalOpen = false;
  }

  protected goToForum(forumId: number) {
    this.router.navigate(['/app/forum-discussion/', forumId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
