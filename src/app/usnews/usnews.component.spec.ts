import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsnewsComponent } from './usnews.component';

describe('UsnewsComponent', () => {
  let component: UsnewsComponent;
  let fixture: ComponentFixture<UsnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
