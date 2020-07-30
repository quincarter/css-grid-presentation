import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuExpandComponent } from './side-menu-expand.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SideMenuExpandComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [SideMenuExpandComponent],
})
export class SideMenuExpandModule {}
