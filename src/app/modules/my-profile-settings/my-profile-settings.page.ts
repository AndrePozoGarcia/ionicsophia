import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { users } from 'src/app/core/constants/users';
import { User } from 'src/app/core/interfaces/user.interface';
import { NotificationService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-my-profile-settings',
  templateUrl: './my-profile-settings.page.html',
  styleUrls: ['./my-profile-settings.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export default class MyProfileSettingsPage implements OnInit {
  protected profileForm: FormGroup;
  protected userLogged: User = users[0];

  constructor(private navCtrl: NavController, private notificationService: NotificationService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl<string>('',),
      username: new FormControl<string>('',),
      email: new FormControl<string>('',),
      password: new FormControl<string>('',),
      location: new FormControl<string>(''),
      workLocation: new FormControl<string>(''),
      homeLocation: new FormControl<string>(''),
      phone: new FormControl<string>(''),
      cardNumber: new FormControl<string>(''),
      giftBalance: new FormControl<string>(''),
    });
  }

  ngAfterViewInit() {
    this.profileForm.patchValue(this.userLogged);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected saveChanges() {
    if (this.profileForm.valid) {
      this.notificationService.showToast('Perfil actualizado', 'success');
    } else {
      this.notificationService.showToast('Error al actualizar', 'danger');
    }
  }
}
