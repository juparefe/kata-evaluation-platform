import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'participants', loadChildren: () => import('./pages/participants/participants.module').then(m => m.ParticipantsModule) },
  { path: 'judges', loadChildren: () => import('./pages/judges/judges.module').then(m => m.JudgesModule) },
  { path: 'results', loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
