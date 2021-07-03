import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerOffersComponent } from './employer-offers.component';

describe('EmployerOffersComponent', () => {
  let component: EmployerOffersComponent;
  let fixture: ComponentFixture<EmployerOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
