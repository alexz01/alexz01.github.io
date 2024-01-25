import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../app.model';

@Component({
  selector: 'work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  workExp!: Observable<Array<WorkExperience>>;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.workExp = this.http.get<Array<WorkExperience>>('assets/data/work-experience.json');
  }
}
