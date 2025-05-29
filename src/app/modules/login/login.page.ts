import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { users } from 'src/app/core/constants/users';
import { User } from 'src/app/core/interfaces/user.interface';
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

  constructor(private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.formCredentials = new FormGroup({
      username: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  }

  //Reemplazar el contenido cuando se haga el servicio de autenticacion
  protected login() {
    if (this.isCredentialsCorrect(this.formCredentials.get('username').value)) {
      this.notificationService.showToast(`Bienvenido ${this.userLogged.name}`, 'success');
      //Aca actualmente lo deje como una variable el reconocimiento de si es un nuevo usuario para ir a /home o /onboarding, esto mas adelante se puede hacer con el service de auth
      this.router.navigate([this.userLogged.isNewUser ? '/onboarding' : '/app/home'])
    } else {
      this.notificationService.showToast(`Credenciales incorrectas`, 'danger');
    }
  }

  private isCredentialsCorrect(username: string) {
    this.userLogged = users.find(user => username === user.username);
    return !!this.userLogged && !!this.formCredentials.get('password').value;
  }
}
