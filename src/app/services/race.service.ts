import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Race } from '../models/race.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private collectionName = 'Races';

  constructor(private firestore: AngularFirestore) {}

  getRaces() {
    return this.firestore
      .collection<Race>(this.collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Race;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getRaceById(id: string) {
    return this.firestore
      .collection<Race>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  addRace(race: Race) {
    return this.firestore.collection<Race>(this.collectionName).add(race);
  }

  updateRace(id: string, race: Partial<Race>) {
    return this.firestore
      .collection<Race>(this.collectionName)
      .doc(id)
      .update(race);
  }

  deleteRace(id: string) {
    return this.firestore
      .collection<Race>(this.collectionName)
      .doc(id)
      .delete();
  }
}
