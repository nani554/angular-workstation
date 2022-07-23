import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCodeSnippetsComponent } from './js-code-snippets.component';

describe('JsCodeSnippetsComponent', () => {
  let component: JsCodeSnippetsComponent;
  let fixture: ComponentFixture<JsCodeSnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsCodeSnippetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCodeSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
