import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BobRossComponent } from './bob-ross.component';

const routes: Routes = [
  {
    path: '',
    component: BobRossComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BobRossRoutingModule {}
