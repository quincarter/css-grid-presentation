import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayingWithRowsComponent } from './playing-with-rows.component';

const routes: Routes = [
  {
    path: '',
    component: PlayingWithRowsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayingWithRowsRoutingModule {}
