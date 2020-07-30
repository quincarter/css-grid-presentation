import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingWithColumnsComponent } from './playing-with-columns.component';
import { PlayingWithColumnsRoutingModule } from './playing-with-columns-routing.module';


@NgModule({
  declarations: [PlayingWithColumnsComponent],
  imports: [
    CommonModule,
    PlayingWithColumnsRoutingModule
  ]
})
export class PlayingWithColumnsModule { }
