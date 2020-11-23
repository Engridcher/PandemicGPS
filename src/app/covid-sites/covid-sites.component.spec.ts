import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidSitesComponent } from './covid-sites.component';

describe('CovidSitesComponent', () => {
  let component: CovidSitesComponent;
  let fixture: ComponentFixture<CovidSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
