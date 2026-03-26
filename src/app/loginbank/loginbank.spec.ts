import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginbank } from './loginbank';

describe('Loginbank', () => {
  let component: Loginbank;
  let fixture: ComponentFixture<Loginbank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginbank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginbank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
