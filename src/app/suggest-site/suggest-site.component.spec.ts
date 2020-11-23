import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestSiteComponent } from './suggest-site.component';

describe('SuggestSiteComponent', () => {
  let component: SuggestSiteComponent;
  let fixture: ComponentFixture<SuggestSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
