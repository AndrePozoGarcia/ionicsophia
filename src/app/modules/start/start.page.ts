import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],

  standalone: true,
  imports: [IonicModule]
})
export default class StartPage implements OnInit {

  protected readonly curvedText: string = 'Tu app preferida';

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/init'])
    }, 2000);
  }
}
