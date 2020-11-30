import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSuggestSiteComponent } from './get-suggest-site.component';

describe('GetSuggestSiteComponent', () => {
  let component: GetSuggestSiteComponent;
  let fixture: ComponentFixture<GetSuggestSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSuggestSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSuggestSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
