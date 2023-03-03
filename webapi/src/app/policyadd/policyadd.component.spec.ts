import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyaddComponent } from './policyadd.component';

describe('PolicyaddComponent', () => {
  let component: PolicyaddComponent;
  let fixture: ComponentFixture<PolicyaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
