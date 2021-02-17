import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'covid',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'morphisme',
    loadChildren: () => import('./morphisme/morphisme.module').then( m => m.MorphismePageModule)
  },
  {
    path: 'fleur',
    loadChildren: () => import('./fleur/fleur.module').then( m => m.FleurPageModule)
  },
  {
    path: 'detail-fleur',
    loadChildren: () => import('./detail-fleur/detail-fleur.module').then( m => m.DetailFleurPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'welcome-covid',
    loadChildren: () => import('./welcome-covid/welcome-covid.module').then( m => m.WelcomeCovidPageModule)
  },
  {
    path: 'resto',
    loadChildren: () => import('./resto/resto.module').then( m => m.RestoPageModule)
  },
  {
    path: 'netflix',
    loadChildren: () => import('./netflix/netflix.module').then( m => m.NetflixPageModule)
  },
  {
    path: 'detail-flix',
    loadChildren: () => import('./detail-flix/detail-flix.module').then( m => m.DetailFlixPageModule)
  },
  {
    path: 'tiktok',
    loadChildren: () => import('./tiktok/tiktok.module').then( m => m.TiktokPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
