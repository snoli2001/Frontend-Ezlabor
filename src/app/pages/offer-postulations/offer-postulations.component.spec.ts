import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPostulationsComponent } from './offer-postulations.component';

describe('OfferPostulationsComponent', () => {
  let component: OfferPostulationsComponent;
  let fixture: ComponentFixture<OfferPostulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPostulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
