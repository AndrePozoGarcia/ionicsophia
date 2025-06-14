import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { Forum } from 'src/app/core/interfaces/forum.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { ForumsService } from 'src/app/core/services/forum.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export default class ForumPage implements OnInit {
  protected forums: Forum[] = [];
  protected isModalOpen = false;
  protected newForumTitle = '';
  protected userLogged: User;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private forumsService: ForumsService,
    private usersService: UsersService,
    private notificationsService: NotificationService
  ) { }

  async ngOnInit() {
    this.userLogged = await this.usersService.getCurrentUser();
    this.forums = await this.forumsService.getForums();
  }

  protected openModal() {
    this.newForumTitle = '';
    this.isModalOpen = true;
  }

  protected async createForum() {
    const newForum: Forum = {
      id: Date.now().toString(),
      title: this.newForumTitle,
      createdBy: this.userLogged.username,
    };
    this.forumsService.addForum(newForum);
    this.forums = await this.forumsService.getForums();
    this.notificationsService.showToast('Foro creado exitosamente', 'success');
    this.isModalOpen = false;
  }

  protected goToForum(forumId: string) {
    this.router.navigate(['/app/forum-discussion/', forumId]);
  }

  protected goBack() {
    this.navCtrl.back();
  }
}
