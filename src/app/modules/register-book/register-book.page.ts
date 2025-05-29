import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { NotificationService } from 'src/app/core/services/toast.service';

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
  ) { }

  ngOnInit() {
    this.formRegistryBook = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected save() {
    console.log('form value:', this.formRegistryBook.value);

    if (this.formRegistryBook.valid) {
      console.log('Datos del libro:', this.formRegistryBook.value);
      this.notificationService.showToast('Libro registrado con éxito', 'success');
    } else {
      console.warn('Formulario inválido');
      this.notificationService.showToast('Por favor, completa todos los campos requeridos', 'danger');
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
