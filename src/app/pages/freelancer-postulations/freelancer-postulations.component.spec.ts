import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerPostulationsComponent } from './freelancer-postulations.component';

describe('FreelancerPostulationsComponent', () => {
  let component: FreelancerPostulationsComponent;
  let fixture: ComponentFixture<FreelancerPostulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerPostulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
