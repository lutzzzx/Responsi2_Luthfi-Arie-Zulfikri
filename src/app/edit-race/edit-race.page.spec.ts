import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRacePage } from './edit-race.page';

describe('EditRacePage', () => {
  let component: EditRacePage;
  let fixture: ComponentFixture<EditRacePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
