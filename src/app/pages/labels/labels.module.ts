import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsComponent } from './labels.component';
import { LabelsRoutingModule } from './labels-routing.module';

@NgModule({
  declarations: [LabelsComponent],
  imports: [CommonModule, LabelsRoutingModule],
  exports: [LabelsComponent],
})
export class LabelsModule {}
