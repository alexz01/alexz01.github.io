import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WorkExpComponent } from './work-exp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('WorkExpComponent', () => {
  let component: WorkExpComponent;
  let fixture: ComponentFixture<WorkExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkExpComponent]
    });
    fixture = TestBed.createComponent(WorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
