import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageOutletComponent } from './app-page-outlet.component';

describe('AppPageOutletComponent', () => {
  let component: AppPageOutletComponent;
  let fixture: ComponentFixture<AppPageOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
