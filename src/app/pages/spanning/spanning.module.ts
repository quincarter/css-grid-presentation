import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanningComponent } from './spanning.component';
import { MatCardModule } from '@angular/material/card';
import { SpanningRoutingModule } from './spanning-routing.module';


@NgModule({
  declarations: [SpanningComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SpanningRoutingModule
  ]
})
export class SpanningModule { }
