import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JudgeRegisterComponent } from './register/judge/judge.component';
import { ParticipantRegisterComponent } from './register/participant/participant.component';


@NgModule({
  declarations: [
    LoginComponent,
    JudgeRegisterComponent,
    ParticipantRegisterComponent 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
