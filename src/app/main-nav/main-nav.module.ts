import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavRoutingModule } from './main-nav-routing.module';
import { MainNavComponent } from './main-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuExpandModule } from '../components/side-menu-expand/side-menu-expand.module';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MainNavRoutingModule,
    SideMenuExpandModule,
  ],
})
export class MainNavModule {}
