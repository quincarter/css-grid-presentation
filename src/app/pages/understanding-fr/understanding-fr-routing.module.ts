import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderstandingFrComponent } from './understanding-fr.component';

const routes: Routes = [
  {
    path: '',
    component: UnderstandingFrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandingFrRoutingModule {}
