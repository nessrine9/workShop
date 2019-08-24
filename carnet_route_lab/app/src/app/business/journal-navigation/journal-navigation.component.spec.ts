import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalNavigationComponent } from './journal-navigation.component';

describe('JournalNavigationComponent', () => {
  let component: JournalNavigationComponent;
  let fixture: ComponentFixture<JournalNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
