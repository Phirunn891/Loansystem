import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fixprincipal } from './fixprincipal';

describe('Fixprincipal', () => {
  let component: Fixprincipal;
  let fixture: ComponentFixture<Fixprincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fixprincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fixprincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
