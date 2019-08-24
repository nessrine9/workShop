import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeEditFormComponent } from './vehicule-edit-form.component';

describe('VehiculeEditFormComponent', () => {
  let component: VehiculeEditFormComponent;
  let fixture: ComponentFixture<VehiculeEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
