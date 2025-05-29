import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { categories } from 'src/app/core/constants/categories';
import { Category } from 'src/app/core/interfaces/category.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.categories = categories.map((cat) => ({ ...cat, selected: false }));
    this.chunkCategories();
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

  protected save() {
    const categoriesToSave = this.categories.filter(c => c.selected).map(c => c.id);
    //Esto es lo que se tendria que mandar al servicio encargado de guardar las preferencias de usuario y actualizar el isNewUser a false
    console.log(categoriesToSave);
    this.router.navigate(['/app/home'])
  }
}
