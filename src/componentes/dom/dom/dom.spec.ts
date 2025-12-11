import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dom } from './dom';

describe('Dom', () => {
  let component: Dom;
  let fixture: ComponentFixture<Dom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
