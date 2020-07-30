import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
