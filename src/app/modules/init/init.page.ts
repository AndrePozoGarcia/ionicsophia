import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],

  standalone: true,
  imports: [IonicModule]
})
export default class InitPage implements OnInit {
  protected actionSheetButtons = [
    {
      text: 'Iniciar sesión',
      role: 'login',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Registrarse',
      role: 'registry',
      data: {
        action: 'registry',
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  protected handleActionSheet(event: CustomEvent) {
    const role = event.detail.role;
    const actions: Record<string, () => void> = {
      login: () => this.goLoginView(),
      registry: () => this.goRegisterView(),
    };

    actions[role]?.();
  }

  private goLoginView() {
    this.router.navigate(['/login'])
  }

  private goRegisterView() {
    this.router.navigate(['/registry'])
  }
}
