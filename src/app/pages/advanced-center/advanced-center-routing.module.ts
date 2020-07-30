import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedCenterComponent } from './advanced-center.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedCenterRoutingModule {}
