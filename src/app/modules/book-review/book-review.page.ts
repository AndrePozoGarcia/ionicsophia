import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { clubs as initialClubs } from 'src/app/core/constants/reviews';
import { ReviewBook } from 'src/app/core/interfaces/reviews-book';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.page.html',
  styleUrls: ['./book-review.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export default class BookReviewPage implements OnInit {
  public formReview: FormGroup;
  public clubs: ReviewBook[] = [];
  stars = Array(5).fill(0);

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.clubs = [...initialClubs];

    this.formReview = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      review: ['', [Validators.required, Validators.minLength(3)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });   
  }

  setRating(index: number) {
    this.formReview.patchValue({ rating: index + 1 });
  }
  

  publishReview(): void {
    if (this.formReview.valid) {
      const newReview: ReviewBook = {
        id: this.clubs.length,
        name: this.formReview.value.title,
        description: this.formReview.value.review,
        review: this.formReview.value.rating,
        img: 'assets/img/users/default-user.png',
        username: 'UsuarioAnónimo',
        date: new Date().toLocaleDateString('es-ES'),
      };

      this.clubs.unshift(newReview);
      console.log('Nueva reseña:', newReview);
      this.formReview.reset();
      console.log(newReview);
    } else {
      console.warn('Formulario inválido');
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
