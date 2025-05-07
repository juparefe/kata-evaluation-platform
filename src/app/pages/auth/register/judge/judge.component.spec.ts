import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeRegisterComponent } from './judge.component';

describe('JudgeComponent', () => {
  let component: JudgeRegisterComponent;
  let fixture: ComponentFixture<JudgeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudgeRegisterComponent]
    });
    fixture = TestBed.createComponent(JudgeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
