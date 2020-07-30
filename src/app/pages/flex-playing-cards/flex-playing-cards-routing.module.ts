import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexPlayingCardsComponent } from './flex-playing-cards.component';

const routes: Routes = [
  {
    path: '',
    component: FlexPlayingCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexPlayingCardsRoutingModule {}
