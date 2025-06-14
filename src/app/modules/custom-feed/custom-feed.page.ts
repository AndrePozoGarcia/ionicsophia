import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/core/interfaces/category.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-custom-feed',
  templateUrl: './custom-feed.page.html',
  styleUrls: ['./custom-feed.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export default class CustomFeedPage implements OnInit {
  protected categories: Category[] = [];
  protected categoriesChunks: Category[][] = [];

  constructor(
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService,
    private categoriesService: CategoriesService
  ) { }

  async ngOnInit() {
    this.categories = await this.loadCategories();
    this.chunkCategories();
  }

  private async loadCategories(): Promise<Category[]> {
    const categories = await this.categoriesService.getCategories();
    return categories.map((cat) => ({ ...cat, selected: false }));
  }

  private chunkCategories() {
    this.categoriesChunks = [];
    for (let i = 0; i < this.categories.length; i += 2) {
      this.categoriesChunks.push(this.categories.slice(i, i + 2));
    }
  }

  protected toggleCategory(cat: Category) {
    cat.selected = !cat.selected;
  }

  protected async save() {
    const userId = this.authService.getCurrentUserId();
    const categoriesIdsToSave = this.categories.filter(c => c.selected).map(c => c.id);
    const categoriesNamesToSave = this.categories.filter(c => c.selected).map(c => c.name);

    const uploadPayload = {
      favoriteCategoriesIds: categoriesIdsToSave,
      favoriteCategoriesNames: categoriesNamesToSave
    };

    if (userId) {
      try {
        await this.usersService.updateUserByUserId(userId, uploadPayload);
      } catch (error) {
        console.error('Error updating user categories:', error);
      }
      this.router.navigate(['/app/home']);
    } else {
      console.error('No user is currently logged in');
    }

    this.router.navigate(['/app/home'])
  }
}
