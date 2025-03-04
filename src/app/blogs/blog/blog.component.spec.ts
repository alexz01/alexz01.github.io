import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {snapshot: {data: {}}} }
      ],
      imports: [BlogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
