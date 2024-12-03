import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from '../services/race.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.page.html',
  styleUrls: ['./add-race.page.scss'],
})
export class AddRacePage {
  race = {
    name: '',
    description: '',
    schedule: '',
    track_details: '',
    created_by: '',
  };

  constructor(
    private raceService: RaceService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  async addRace() {
    try {
      // Ambil UID pengguna dari Firebase Authentication
      const user = await this.afAuth.currentUser;

      if (!user || !user.uid) {
        alert('User not authenticated. Please log in again.');
        return;
      }

      this.race.created_by = user.uid;

      // Simpan data balapan ke Firestore
      await this.raceService.addRace(this.race);

      alert('Race added successfully!');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error adding race:', error);
      alert('Failed to add race. Please try again.');
    }
  }
}
