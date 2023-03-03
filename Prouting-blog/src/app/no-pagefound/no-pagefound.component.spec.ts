import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPagefoundComponent } from './no-pagefound.component';

describe('NoPagefoundComponent', () => {
  let component: NoPagefoundComponent;
  let fixture: ComponentFixture<NoPagefoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPagefoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPagefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
