import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFreelancerProfileComponent } from './view-freelancer-profile.component';

describe('ViewFreelancerProfileComponent', () => {
  let component: ViewFreelancerProfileComponent;
  let fixture: ComponentFixture<ViewFreelancerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFreelancerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFreelancerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
