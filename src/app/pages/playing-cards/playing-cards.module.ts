import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingCardsComponent } from './playing-cards.component';
import { PlayingCardsRoutingModule } from './playing-cards-routing.module';


@NgModule({
  declarations: [PlayingCardsComponent],
  imports: [
    CommonModule,
    PlayingCardsRoutingModule
  ]
})
export class PlayingCardsModule { }
