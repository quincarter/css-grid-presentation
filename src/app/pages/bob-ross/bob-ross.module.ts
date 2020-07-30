import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BobRossComponent } from './bob-ross.component';
import { BobRossRoutingModule } from './bob-ross-routing.module';


@NgModule({
  declarations: [BobRossComponent],
  imports: [
    CommonModule,
    BobRossRoutingModule
  ]
})
export class BobRossModule { }
