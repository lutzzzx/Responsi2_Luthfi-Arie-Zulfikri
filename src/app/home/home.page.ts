import { Component, OnInit } from '@angular/core';
import { RaceService } from '../services/race.service';
import { Race } from '../models/race.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  races: Race[] = [];

  constructor(
    private raceService: RaceService,
    private alertController: AlertController,
    private router: Router // Menambahkan Router
  ) {}

  ngOnInit() {
    this.raceService.getRaces().subscribe((races) => {
      this.races = races;
    });
  }

  goToDetails(id: string) {
    this.router.navigate(['/race-detail', id]);
  }

  goToEdit(id: string) {
    this.router.navigate(['/edit-race', id]); // Mengarahkan ke halaman edit-race
  }

  async confirmDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this race?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.raceService.deleteRace(id).then(() => {
              console.log('Race deleted');
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
