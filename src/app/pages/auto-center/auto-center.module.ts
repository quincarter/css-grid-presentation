import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCenterComponent } from './auto-center.component';
import { AutoCenterRoutingModule } from './auto-center-routing.module';



@NgModule({
  declarations: [AutoCenterComponent],
  imports: [
    CommonModule,
    AutoCenterRoutingModule
  ]
})
export class AutoCenterModule { }
