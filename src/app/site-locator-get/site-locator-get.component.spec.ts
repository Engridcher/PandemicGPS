import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLocatorGetComponent } from './site-locator-get.component';

describe('SiteLocatorGetComponent', () => {
  let component: SiteLocatorGetComponent;
  let fixture: ComponentFixture<SiteLocatorGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLocatorGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLocatorGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
