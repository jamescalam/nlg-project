import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGenComponent } from './text-gen.component';

describe('TextGenComponent', () => {
  let component: TextGenComponent;
  let fixture: ComponentFixture<TextGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
