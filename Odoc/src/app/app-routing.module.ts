import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./doctor/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./doctor/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'dailypost',
    loadChildren: () => import('./doctor/dailypost/dailypost.module').then( m => m.DailypostPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
