import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { reviews } from 'src/app/core/constants/reviews';
import { ReviewBook } from 'src/app/core/interfaces/reviews-book';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.page.html',
  styleUrls: ['./book-review.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export default class BookReviewPage implements OnInit {
  public formReview: FormGroup;
  public reviewsByBook: ReviewBook[] = [];
  stars = Array(5).fill(0);

  private bookId: string = '';
  private userLogged: User;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private notificationsService: NotificationService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private reviewsService: ReviewsService,
    private booksService: BooksService
  ) { }

  async ngOnInit() {
    this.formReview = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      review: ['', [Validators.required, Validators.minLength(1)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });

    this.bookId = this.route.snapshot.paramMap.get('id');
    this.userLogged = await this.usersService.getCurrentUser();
    const reviews = await this.reviewsService.getReviews();
    this.reviewsByBook = reviews
      .filter(r => r.bookId == this.bookId)
      .sort((a, b) => this.parseDate(b.date).getTime() - this.parseDate(a.date).getTime());
  }

  setRating(index: number) {
    this.formReview.patchValue({ rating: index + 1 });
  }

  async publishReview() {
    if (this.formReview.valid) {
      const newReview: ReviewBook = {
        id: new Date().toISOString(),
        name: this.formReview.value.title,
        description: this.formReview.value.review,
        review: this.formReview.value.rating,
        img: this.userLogged.img,
        username: this.userLogged.username,
        date: new Date().toLocaleDateString('es-ES'),
        bookId: this.bookId
      };
      this.reviewsService.addReview(newReview);
      this.notificationsService.showToast('Calificacion agregada', 'success');


      const reviews = await this.reviewsService.getReviews();
      this.reviewsByBook = reviews
        .filter(r => r.bookId == this.bookId)
        .sort((a, b) => this.parseDate(b.date).getTime() - this.parseDate(a.date).getTime());

      const calculateReview = Math.round(
        this.reviewsByBook.reduce((sum, r) => sum + r.review, 0) / this.reviewsByBook.length
      );

      this.booksService.updateBookById(this.bookId, { review: calculateReview });

    } else {
      this.notificationsService.showToast('LLene todos los campos', 'warning');
      console.warn('Formulario inválido');
    }
  }

  private parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  goBack() {
    this.navCtrl.back();
  }
}
