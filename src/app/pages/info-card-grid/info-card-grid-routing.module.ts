import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCardGridComponent } from './info-card-grid.component';

const routes: Routes = [
  {
    path: '',
    component: InfoCardGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCardGridRoutingModule {}
