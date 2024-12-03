import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRacePage } from './edit-race.page';

const routes: Routes = [
  {
    path: '',
    component: EditRacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRacePageRoutingModule {}
