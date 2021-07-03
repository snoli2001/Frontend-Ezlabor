import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerOfferComponent } from './employer-offer.component';

describe('EmployerOfferComponent', () => {
  let component: EmployerOfferComponent;
  let fixture: ComponentFixture<EmployerOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
