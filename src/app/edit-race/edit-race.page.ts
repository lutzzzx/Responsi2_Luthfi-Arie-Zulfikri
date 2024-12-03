import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from '../services/race.service';
import { Race } from '../models/race.model';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.page.html',
  styleUrls: ['./edit-race.page.scss'],
})
export class EditRacePage implements OnInit {
  race: Race = {
    name: '',
    description: '',
    schedule: '',
    track_details: '',
    created_by: '',
  };
  id: string = '';

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.raceService.getRaceById(this.id).subscribe((data) => {
      this.race = data as Race;
    });
  }

  async updateRace() {
    await this.raceService.updateRace(this.id, this.race);
    this.router.navigate(['/home']);
  }
}
