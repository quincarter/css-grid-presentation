import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingWithRowsComponent } from './playing-with-rows.component';
import { PlayingWithRowsRoutingModule } from './playing-with-rows-routing.module';



@NgModule({
  declarations: [PlayingWithRowsComponent],
  imports: [
    CommonModule,
    PlayingWithRowsRoutingModule
  ]
})
export class PlayingWithRowsModule { }
