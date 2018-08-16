import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincePageComponent } from './prince-page.component';

describe('PrincePageComponent', () => {
  let component: PrincePageComponent;
  let fixture: ComponentFixture<PrincePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
