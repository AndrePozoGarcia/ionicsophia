import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CalendarEvent } from 'src/app/core/interfaces/calendar-event';
import { EventsService } from 'src/app/core/services/events.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { CalendarService } from '../calendar/services/calendar.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export default class CreateEventPage implements OnInit {
  protected eventForm: FormGroup;
  protected clubForm: FormGroup;
  protected startTime: string = new Date().toISOString();
  protected previewImage: string | ArrayBuffer | null = null;
  protected selectedFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private eventsService: EventsService,
    private calendarService: CalendarService,
  ) { }

  ngOnInit() {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      typeEvent: ['Feria', Validators.required],
      descriptionEvent: [''],

      imgEvent: [''],

      eventInitDate: ['', Validators.required],
      eventEndDate: [''],

      eventInitTime: ['', Validators.required],
      eventEndTime: [''],

      price: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      shareEvent: [true],
    });
  }

  protected onSubmit() {
    console.log('Formulario enviado:', this.eventForm.value);
    if (this.eventForm.valid) {
      const event: CalendarEvent = this.eventForm.value;
      const payload: CalendarEvent = {
        ...event,
        id: Date.now().toString(),
        imgEvent: `assets/${this.selectedFile.name}`
      }
      this.eventsService.addEvent(payload);
      this.notificationService.showToast('Evento creado con éxito', 'success');
      this.goBack();
    } else {
      this.notificationService.showToast('Por favor completa todos los campos requeridos', 'danger');
      console.log('Formulario inválido:', this.eventForm.errors);
    }
  }

  protected goBack() {
    this.calendarService.setFilterTrigger(Date.now().toString());
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
