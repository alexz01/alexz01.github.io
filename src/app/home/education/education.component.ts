import { Component } from '@angular/core';
import { Education } from '../../app.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'r-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [NgFor]
})
export class EducationComponent {

  education: Array<Education> = [
    {
      "name": "University at Buffalo - SUNY",
      "course": "Computer Science",
      "degree": "Master of Science",
      "from": "Aug, 2017",
      "to": "Feb, 2019",
      "location": "Buffalo, NY"
    },
    {
      "name": "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      "course": "Information Technology",
      "degree": "Bachelor of Engineering (Hons.)",
      "from": "Aug, 2011",
      "to": "May, 2015",
      "location": "India"
    }
  ]
}
