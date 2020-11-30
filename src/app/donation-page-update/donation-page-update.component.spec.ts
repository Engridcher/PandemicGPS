import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPageUpdateComponent } from './donation-page-update.component';

describe('DonationPageUpdateComponent', () => {
  let component: DonationPageUpdateComponent;
  let fixture: ComponentFixture<DonationPageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPageUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
