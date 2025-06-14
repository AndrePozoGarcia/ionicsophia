import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],

  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export default class RegistryPage implements OnInit {
  protected formRegistryUser: FormGroup;

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService,
    private userService: UsersService,
  ) { }

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

  public async save() {
    if (this.formRegistryUser.valid) {
      const { email, password } = this.formRegistryUser.value;
      const credential = { email: email || '', password: password || '' };

      try {
        const user = await this.authService.signUpInWithEmail(credential);
        this.saveUserData(user);
        this.router.navigate(['/onboarding'])
        this.notificationService.showToast('Cuenta creada', 'success');
      } catch (error) {
        this.notificationService.showToast('Error al crear cuenta', 'danger');
      }

    } else {
      this.notificationService.showToast('Llene todos los campos porfavor', 'warning');
    }
  }

  private saveUserData(userLogged: UserCredential) {
    const userData: User = {
      id: userLogged.user.uid,
      username: this.formRegistryUser.value.username,
      email: this.formRegistryUser.value.email,
      name: this.formRegistryUser.value.name,
      img: '',
      phone: '',
      location: '',
      homeLocation: '',
      workLocation: '',
      cardNumber: '',
      giftBalance: 0,
      favoriteBooks: [],
      favoriteCategoriesNames: [],
      favoriteCategoriesIds: []
    };
    this.userService.addUser(userData);
  }
}
