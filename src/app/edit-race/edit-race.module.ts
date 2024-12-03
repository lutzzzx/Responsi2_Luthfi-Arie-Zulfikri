import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRacePageRoutingModule } from './edit-race-routing.module';

import { EditRacePage } from './edit-race.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRacePageRoutingModule
  ],
  declarations: [EditRacePage]
})
export class EditRacePageModule {}
