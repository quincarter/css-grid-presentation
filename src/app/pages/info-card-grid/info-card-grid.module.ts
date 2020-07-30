import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardGridComponent } from './info-card-grid.component';
import { InfoCardGridRoutingModule } from './info-card-grid-routing.module';
import { MediaObjectModule } from '../../components/media-object/media-object.module';


@NgModule({
  declarations: [InfoCardGridComponent],
  imports: [
    CommonModule,
    InfoCardGridRoutingModule,
    MediaObjectModule
  ]
})
export class InfoCardGridModule { }
