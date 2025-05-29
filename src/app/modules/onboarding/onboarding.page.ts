import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],

  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class OnboardingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  protected goToCustomFeed() {
    this.router.navigate(['/custom-feed']);
  }
}
