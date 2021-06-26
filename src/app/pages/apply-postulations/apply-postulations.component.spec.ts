import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPostulationsComponent } from './apply-postulations.component';

describe('ApplyPostulationsComponent', () => {
  let component: ApplyPostulationsComponent;
  let fixture: ComponentFixture<ApplyPostulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPostulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
