import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedCenterComponent } from './advanced-center.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdvancedCenterRoutingModule } from './advanced-center-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AdvancedCenterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AdvancedCenterRoutingModule,
    MatButtonModule
  ]
})
export class AdvancedCenterModule { }
