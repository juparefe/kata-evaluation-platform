import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParticipantsModule { }
