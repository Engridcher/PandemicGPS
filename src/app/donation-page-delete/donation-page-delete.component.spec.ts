import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPageDeleteComponent } from './donation-page-delete.component';

describe('DonationPageDeleteComponent', () => {
  let component: DonationPageDeleteComponent;
  let fixture: ComponentFixture<DonationPageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPageDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
