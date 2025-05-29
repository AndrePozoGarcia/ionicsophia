import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],

  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export default class RegistryPage implements OnInit {
  protected formRegistryUser: FormGroup;

  constructor(private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.formRegistryUser = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      username: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
      confirmEmail: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  save() {
    if (this.formRegistryUser.valid) {
      //En esta parte agregar la llamada al servicio de creacion de usuario
      this.router.navigate(['/login'])
      this.notificationService.showToast('Cuenta creada', 'success');
    } else {
      this.notificationService.showToast('Llene todos los campos porfavor', 'warning');
    }
  }

}
