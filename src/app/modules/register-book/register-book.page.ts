import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { books } from 'src/app/core/constants/books';
import { Book } from 'src/app/core/interfaces/book.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.page.html',
  styleUrls: ['./register-book.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export default class RegisterBookPage implements OnInit {
  protected formRegistryBook: FormGroup;
  protected previewCover: string | ArrayBuffer | null = null;
  protected previewQR: string | ArrayBuffer | null = null;

  protected selectedCoverFile: File | null = null;
  protected selectedQRFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private booksService: BooksService,
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.formRegistryBook = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      img: ['', Validators.required],
      qrImg: ['', Validators.required],
    });
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected async save() {
    if (this.formRegistryBook.valid && this.selectedCoverFile && this.selectedQRFile) {
      try {
        const user: User = await this.userService.getCurrentUser();
        const bookPayload: Book = {
          name: this.formRegistryBook.value.name,
          description: this.formRegistryBook.value.description,
          price: this.formRegistryBook.value.price,
          img: `assets/${this.selectedCoverFile.name}`,
          qrImg: `assets/${this.selectedQRFile.name}`,
          userId: user.id,
          userUserName: user.name,
          distance: 0,
          categories: [],
          requestUsersIds: [],
          review: 0,
          author: 'anonym',
          bookStatus: 'Nuevo',
          cover: 'Tapa blanda',
          sinceTime: '',
          soldOut: false
        }
        await this.booksService.addBook(bookPayload);
        this.notificationService.showToast('Libro registrado con éxito', 'success');
      } catch (error) {
        console.error('Error al subir imágenes:', error);
        this.notificationService.showToast('Error al registrar el libro', 'danger');
      }
    } else {
      this.notificationService.showToast('Completa todos los campos', 'danger');
    }
  }


  protected onImageSelected(event: Event, type: 'cover' | 'qr') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (type === 'cover') {
          this.selectedCoverFile = file;
          this.previewCover = reader.result;
        } else {
          this.selectedQRFile = file;
          this.previewQR = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
