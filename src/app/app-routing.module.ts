import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FooterTabsComponent } from './shared/footer-tabs/footer-tabs.component';

const routes: Routes = [
  { path: 'start', loadComponent: () => import('./modules/start/start.page') },
  { path: 'init', loadComponent: () => import('./modules/init/init.page') },
  { path: 'login', loadComponent: () => import('./modules/login/login.page') },
  { path: 'registry', loadComponent: () => import('./modules/registry/registry.page') },
  { path: 'create-event', loadComponent: () => import('./modules/create-event/create-event.page') },
  { path: 'create-club', loadComponent: () => import('./modules/create-club/create-club.page') },
  { path: 'onboarding', loadComponent: () => import('./modules/onboarding/onboarding.page') },
  { path: 'custom-feed', loadComponent: () => import('./modules/custom-feed/custom-feed.page') },
  { path: 'register-book',loadComponent: () => import('./modules/register-book/register-book.page')},
  { path: 'book-review', loadComponent: () => import('./modules/book-review/book-review.page')},

  {
    path: 'app',
    component: FooterTabsComponent,
    children: [
      { path: 'home', loadComponent: () => import('./modules/home/home.page') },
      { path: 'my-profile', loadComponent: () => import('./modules/my-profile/my-profile.page') },
      { path: 'search-books', loadComponent: () => import('./modules/search-books/search-books.page') },
      { path: 'my-profile-settings', loadComponent: () => import('./modules/my-profile-settings/my-profile-settings.page') },
      { path: 'calendar', loadComponent: () => import('./modules/calendar/calendar.page') },
      { path: 'notifications', loadComponent: () => import('./modules/notifications/notifications.page') },
      { path: 'trade', loadComponent: () => import('./modules/trade/trade.page') },
      { path: 'forum', loadComponent: () => import('./modules/forum/forum.page') },
      { path: 'profile/:id', loadComponent: () => import('./modules/profile/profile.page') },
      { path: 'request-that-be-accepted/:id', loadComponent: () => import('./modules/request-that-be-accepted/request-that-be-accepted.page') },
      { path: 'request-that-be-accepted/:id', loadComponent: () => import('./modules/request-that-be-accepted/request-that-be-accepted.page') },
      { path: 'request-your-accepted/:id', loadComponent: () => import('./modules/request-your-accepted/request-your-accepted.page') },
      { path: 'request-sent/:id', loadComponent: () => import('./modules/request-sent/request-sent.page') },
      { path: 'forum-discussion/:id', loadComponent: () => import('./modules/forum-discussion/forum-discussion.page') },
      { path: 'chat/:id', loadComponent: () => import('./modules/chat/chat.page') },
      { path: 'club-detail/:id', loadComponent: () => import('./modules/club-detail/club-detail.page')},
      { path: 'event-detail/:id', loadComponent: () => import('./modules/event-detail/event-detail.page')},
      { path: 'trades/:id', loadComponent: () => import('./modules/trades/trades.page')},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start' },
  {
    path: 'register-book',
    loadChildren: () => import('./modules/register-book/register-book.module').then( m => m.RegisterBookPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
