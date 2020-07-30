import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexPlayingCardsComponent } from './flex-playing-cards.component';
import { FlexPlayingCardsRoutingModule } from './flex-playing-cards-routing.module';


@NgModule({
  declarations: [FlexPlayingCardsComponent],
  imports: [
    CommonModule,
    FlexPlayingCardsRoutingModule
  ]
})
export class FlexPlayingCardsModule { }
