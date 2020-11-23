import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLocatorComponent } from './site-locator.component';

describe('SiteLocatorComponent', () => {
  let component: SiteLocatorComponent;
  let fixture: ComponentFixture<SiteLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
