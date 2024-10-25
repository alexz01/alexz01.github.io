import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../app.model';

@Component({
  selector: 'r-work',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent {

  workExp: Array<WorkExperience> = [
    {
      "position": "Senior Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [],
      "from": "April 2023",
      "to": "Present"
    },
    {
      "position": "Lead Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [],
      "from": "April 2022",
      "to": "March 2023"
    },
    {
      "position": "Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [],
      "from": "August 2019",
      "to": "March 2022"
    },
    {
      "position": "Systems Engineer",
      "company": "Tata Consultancy Engineering",
      "location": "Mumbai, India",
      "detail": [],
      "from": "June 2017",
      "to": "August 2017"
    },
    {
      "position": "Assistant Systems Engineer",
      "company": "Tata Consultancy Engineering",
      "location": "Mumbai, India",
      "detail": [],
      "from": "June 2015",
      "to": "May 2017"
    }
  ]

  constructor(){
  }
}
