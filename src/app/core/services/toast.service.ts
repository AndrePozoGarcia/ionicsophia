import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastCtrl: ToastController) { }

  public showToast(message: string, severity: 'success' | 'danger' | 'warning' = 'success') {
    const actions: Record<string, () => void> = {
      success: () => this.success(message),
      danger: () => this.error(message),
      warning: () => this.warning(message),
    };
    actions[severity]?.();
  }

  private success(message: string) {
    this.presentToast(message, 3000, 'bottom', 'success');
  }

  private error(message: string) {
    this.presentToast(message, 3000, 'bottom', 'danger')
  }

  private warning(message: string) {
    this.presentToast(message, 3000, 'bottom', 'warning')
  }

  private async presentToast(message: string, duration: number, position: any, color: string) {
    const toast = await this.toastCtrl.create({ message, duration, position, color });
    toast.present();
  }
}