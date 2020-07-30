import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCenterComponent } from './auto-center.component';

const routes: Routes = [
  {
    path: '',
    component: AutoCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoCenterRoutingModule {}
