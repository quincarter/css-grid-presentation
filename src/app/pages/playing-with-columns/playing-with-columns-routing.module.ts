import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayingWithColumnsComponent } from './playing-with-columns.component';

const routes: Routes = [
  {
    path: '',
    component: PlayingWithColumnsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayingWithColumnsRoutingModule {}
