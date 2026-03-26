import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classicloan } from './classicloan';

describe('Classicloan', () => {
  let component: Classicloan;
  let fixture: ComponentFixture<Classicloan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classicloan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classicloan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
