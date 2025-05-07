import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JudgesRoutingModule } from './judges-routing.module';
import { JudgesComponent } from './judges.component';


@NgModule({
  declarations: [
    JudgesComponent
  ],
  imports: [
    CommonModule,
    JudgesRoutingModule
  ]
})
export class JudgesModule { }
