import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowsWithNamesComponent } from './rows-with-names.component';

const routes: Routes = [
  {
    path: '',
    component: RowsWithNamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RowsWithNamesRoutingModule {}
