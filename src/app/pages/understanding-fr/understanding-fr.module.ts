import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderstandingFrComponent } from './understanding-fr.component';
import { UnderstandingFrRoutingModule } from './understanding-fr-routing.module';


@NgModule({
  declarations: [UnderstandingFrComponent],
  imports: [
    CommonModule,
    UnderstandingFrRoutingModule
  ]
})
export class UnderstandingFrModule { }
