import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowsWithNamesComponent } from './rows-with-names.component';
import { RowsWithNamesRoutingModule } from './rows-with-names-routing.module';



@NgModule({
  declarations: [RowsWithNamesComponent],
  imports: [
    CommonModule,
    RowsWithNamesRoutingModule
  ]
})
export class RowsWithNamesModule { }
