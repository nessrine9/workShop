import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeAddFormComponent } from './vehicule-add-form.component';

describe('VehiculeAddFormComponent', () => {
  let component: VehiculeAddFormComponent;
  let fixture: ComponentFixture<VehiculeAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
