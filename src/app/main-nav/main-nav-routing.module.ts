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
        path: 'playing-with-columns',
        loadChildren: () => import('../pages/playing-with-columns/playing-with-columns.module').then((m) => m.PlayingWithColumnsModule),
      },
      {
        path: 'playing-with-rows',
        loadChildren: () => import('../pages/playing-with-rows/playing-with-rows.module').then((m) => m.PlayingWithRowsModule),
      },
      {
        path: 'rows-with-names',
        loadChildren: () => import('../pages/rows-with-names/rows-with-names.module').then((m) => m.RowsWithNamesModule),
      },
      {
        path: 'understanding-fr',
        loadChildren: () => import('../pages/understanding-fr/understanding-fr.module').then((m) => m.UnderstandingFrModule),
      },
      {
        path: 'labels',
        loadChildren: () => import('../pages/labels/labels.module').then((m) => m.LabelsModule),
      },
      {
        path: 'info-card-grid',
        loadChildren: () => import('../pages/info-card-grid/info-card-grid.module').then((m) => m.InfoCardGridModule),
      },
      {
        path: 'autofit-vs-autofill',
        loadChildren: () => import('../pages/auto-fit-vs-auto-fill/auto-fit-vs-auto-fill.module').then((m) => m.AutoFitVsAutoFillModule),
      },
      {
        path: 'playing-cards',
        loadChildren: () => import('../pages/playing-cards/playing-cards.module').then((m) => m.PlayingCardsModule),
      },
      {
        path: 'flex-playing-cards',
        loadChildren: () => import('../pages/flex-playing-cards/flex-playing-cards.module').then((m) => m.FlexPlayingCardsModule),
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
        path: 'bob-ross',
        loadChildren: () => import('../pages/bob-ross/bob-ross.module').then((m) => m.BobRossModule),
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
