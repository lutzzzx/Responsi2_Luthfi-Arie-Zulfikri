import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../services/race.service';
import { Race } from '../models/race.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.page.html',
  styleUrls: ['./race-detail.page.scss'],
})
export class RaceDetailPage implements OnInit {
  race: Race | undefined;

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.raceService.getRaceById(id).subscribe((data) => {
      this.race = data as Race;
    });
  }

  goToEdit(id: string) {
    this.router.navigate(['/edit-race', id]);
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
              this.router.navigate(['/home']); // Kembali ke halaman utama setelah menghapus
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
