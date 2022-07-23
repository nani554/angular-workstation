import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDependenciesComponent } from './all-dependencies.component';

describe('AllDependenciesComponent', () => {
  let component: AllDependenciesComponent;
  let fixture: ComponentFixture<AllDependenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDependenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
