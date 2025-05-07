import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesComponent } from './judges.component';

describe('JudgesComponent', () => {
  let component: JudgesComponent;
  let fixture: ComponentFixture<JudgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudgesComponent]
    });
    fixture = TestBed.createComponent(JudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
