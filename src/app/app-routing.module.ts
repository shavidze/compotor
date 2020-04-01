import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'music',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/music/music.module').then(m => m.MusicModule)
      }
    ]
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./modules/videos/videos.module').then(m => m.VideosModule)
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
