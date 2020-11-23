import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuggestSiteComponent } from './update-suggest-site.component';

describe('UpdateSuggestSiteComponent', () => {
  let component: UpdateSuggestSiteComponent;
  let fixture: ComponentFixture<UpdateSuggestSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuggestSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuggestSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
