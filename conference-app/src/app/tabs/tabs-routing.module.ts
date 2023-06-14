import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // agenda page
      {
        path: 'agenda',
        loadChildren: () => import('../pages/agenda/agenda.module').then(m => m.AgendaPageModule)
      }
    ]
  },
  // when path is empty, redirect to agenda page
  {
    path: '',
    redirectTo: '/tabs/agenda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
