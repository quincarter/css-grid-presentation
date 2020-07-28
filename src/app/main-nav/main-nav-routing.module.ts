import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'labels',
        loadChildren: () => import('../pages/labels/labels.module').then((m) => m.LabelsModule),
      },
      {
        path: 'playing-cards',
        loadChildren: () => import('../pages/playing-cards/playing-cards.module').then((m) => m.PlayingCardsModule),
      },
      {
        path: 'spanning',
        loadChildren: () => import('../pages/spanning/spanning.module').then((m) => m.SpanningModule),
      },
      {
        path: 'auto-center',
        loadChildren: () => import('../pages/auto-center/auto-center.module').then((m) => m.AutoCenterModule),
      },
      {
        path: 'advanced-center',
        loadChildren: () => import('../pages/advanced-center/advanced-center.module').then((m) => m.AdvancedCenterModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainNavRoutingModule {}
