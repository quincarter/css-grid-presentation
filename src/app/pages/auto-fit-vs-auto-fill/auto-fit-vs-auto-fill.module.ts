import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFitVsAutoFillComponent } from './auto-fit-vs-auto-fill.component';
import { AutoFitVsAutoFillRoutingModule } from './auto-fit-vs-auto-fill-routing.module';


@NgModule({
  declarations: [AutoFitVsAutoFillComponent],
  imports: [
    CommonModule,
    AutoFitVsAutoFillRoutingModule
  ]
})
export class AutoFitVsAutoFillModule { }
