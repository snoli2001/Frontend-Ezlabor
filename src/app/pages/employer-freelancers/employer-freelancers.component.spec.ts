import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerFreelancersComponent } from './employer-freelancers.component';

describe('EmployerFreelancersComponent', () => {
  let component: EmployerFreelancersComponent;
  let fixture: ComponentFixture<EmployerFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerFreelancersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
