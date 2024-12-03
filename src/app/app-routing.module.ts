import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard], // Lindungi rute ini dengan AuthGuard
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'add-race',
    loadChildren: () =>
      import('./add-race/add-race.module').then((m) => m.AddRacePageModule),
  },
  {
    path: 'edit-race/:id',
    loadChildren: () =>
      import('./edit-race/edit-race.module').then((m) => m.EditRacePageModule),
  },
  {
    path: 'race-detail/:id',
    loadChildren: () =>
      import('./race-detail/race-detail.module').then(
        (m) => m.RaceDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
