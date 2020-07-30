import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpanningComponent } from './spanning.component';

const routes: Routes = [
  {
    path: '',
    component: SpanningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpanningRoutingModule {}
