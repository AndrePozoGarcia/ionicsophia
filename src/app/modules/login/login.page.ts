import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { users } from 'src/app/core/constants/users';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export default class LoginPage implements OnInit {

  protected formCredentials: FormGroup;

  private userLogged: User;

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.formCredentials = new FormGroup({
      email: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  }

  protected async login() {
    if (this.formCredentials.invalid) {
      this.notificationService.showToast('Llene todos los campos porfavor', 'warning');
      return;
    }

    try {
      await this.authService.logInWithEmail(this.formCredentials.value);
      this.router.navigate(['/app/home']);
    } catch (error) {
      this.notificationService.showToast('Error al iniciar sesión', 'danger');
      console.error('Login error:', error);
    }
  }
}
