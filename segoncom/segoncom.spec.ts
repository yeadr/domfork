import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segoncom } from './segoncom';

describe('Segoncom', () => {
  let component: Segoncom;
  let fixture: ComponentFixture<Segoncom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segoncom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segoncom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
