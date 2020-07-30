import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoFitVsAutoFillComponent } from './auto-fit-vs-auto-fill.component';

const routes: Routes = [
  {
    path: '',
    component: AutoFitVsAutoFillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoFitVsAutoFillRoutingModule {}
