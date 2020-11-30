import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLocatorDeleteComponent } from './site-locator-delete.component';

describe('SiteLocatorDeleteComponent', () => {
  let component: SiteLocatorDeleteComponent;
  let fixture: ComponentFixture<SiteLocatorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLocatorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLocatorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
