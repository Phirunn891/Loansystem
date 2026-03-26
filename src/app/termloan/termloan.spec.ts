import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termloan } from './termloan';

describe('Termloan', () => {
  let component: Termloan;
  let fixture: ComponentFixture<Termloan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termloan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Termloan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
