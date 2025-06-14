import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import CreateClubPage from './create-club.page';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./create-club.page'),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateClubPageRoutingModule {}
