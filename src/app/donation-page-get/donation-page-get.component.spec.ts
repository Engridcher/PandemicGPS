import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPageGetComponent } from './donation-page-get.component';

describe('DonationPageGetComponent', () => {
  let component: DonationPageGetComponent;
  let fixture: ComponentFixture<DonationPageGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPageGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPageGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
