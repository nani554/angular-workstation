import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashFunctionalitiesComponent } from './lodash-functionalities.component';

describe('LodashFunctionalitiesComponent', () => {
  let component: LodashFunctionalitiesComponent;
  let fixture: ComponentFixture<LodashFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashFunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
