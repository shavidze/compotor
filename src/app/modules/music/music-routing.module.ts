import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    data: { page: 'music' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
