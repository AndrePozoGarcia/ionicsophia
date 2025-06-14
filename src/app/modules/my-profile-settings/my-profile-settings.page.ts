import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { users } from 'src/app/core/constants/users';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/toast.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-my-profile-settings',
  templateUrl: './my-profile-settings.page.html',
  styleUrls: ['./my-profile-settings.page.scss'],

  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export default class MyProfileSettingsPage implements OnInit {
  protected profileForm: FormGroup;
  protected userLogged: User;
  protected selectedUserImgFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    await this.setUserLogged();
    this.profileForm = new FormGroup({
      name: new FormControl<string>('',),
      username: new FormControl<string>('',),
      email: new FormControl<string>({ value: '', disabled: true }),
      password: new FormControl<string>({ value: '', disabled: true }),
      location: new FormControl<string>(''),
      workLocation: new FormControl<string>(''),
      homeLocation: new FormControl<string>(''),
      phone: new FormControl<string>(''),
      cardNumber: new FormControl<string>(''),
      giftBalance: new FormControl<string>(''),
      img: new FormControl<string>(''),
    });
    this.profileForm.patchValue(this.userLogged);
  }

  private async setUserLogged() {
    const userId = this.authService.getCurrentUserId();
    this.userLogged = await this.usersService.getUserByUserId(userId);
  }

  protected goBack() {
    this.navCtrl.back();
  }

  protected async saveChanges() {
    if (this.profileForm.valid) {
      const userId = this.authService.getCurrentUserId();
      try {
        const userPayload: User = {
          ...this.profileForm.value,
          img: !!this.selectedUserImgFile.name ? `assets/${this.selectedUserImgFile.name}` : this.userLogged.img,
        }
        await this.usersService.updateUserByUserId(userId, userPayload);
        this.notificationService.showToast('Perfil actualizado', 'success');
      } catch (error) {
        this.notificationService.showToast('Error al actualizar', 'danger');
      }
    } else {
      this.notificationService.showToast('Error al actualizar', 'danger');
    }
  }

  protected onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedUserImgFile = file;
      };
      reader.readAsDataURL(file);
    }
  }
}
