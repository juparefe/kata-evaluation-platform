import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantRegisterComponent } from './register/participant/participant.component';
import { JudgeRegisterComponent } from './register/judge/judge.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'participant', component: ParticipantRegisterComponent },
  { path: 'judge', component: JudgeRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
