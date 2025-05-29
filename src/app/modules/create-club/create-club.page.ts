import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CalendarClub } from 'src/app/core/interfaces/calendar-club';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.page.html',
  styleUrls: ['./create-club.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export default class CreateClubPage implements OnInit {
  protected clubForm: FormGroup;
  protected startTime: string = new Date().toISOString();
  protected previewImage: string | ArrayBuffer | null = null;
  protected selectedFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.clubForm = this.fb.group({
      name: ['', Validators.required],
      descriptionClub: ['', Validators.required],
      contact: ['', [Validators.required]],
      imgClub: [''],
      clubInitDate: ['', Validators.required],
      clubInitTime: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      shareClub: [true],
    });
  }

  protected onSubmit() {
    console.log('Formulario enviado:', this.clubForm.value);
    if (this.clubForm.valid) {
      const club: CalendarClub = this.clubForm.value;
      console.log('Club creado:', club);
      // Aquí puedes agregar tu lógica para guardar el clubo
      this.notificationService.showToast('Club creado con éxito', 'success');
      this.goBack();
    } else {
      this.notificationService.showToast('Por favor completa todos los campos requeridos', 'danger');
      console.log('Formulario inválido:', this.clubForm.errors);
      // Aquí puedes agregar tu lógica para manejar el error de formulario inválido
    }
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
