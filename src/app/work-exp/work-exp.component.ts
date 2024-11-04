import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../app.model';

@Component({
  selector: 'r-work',
  templateUrl: './work-exp.component.html'
})
export class WorkExpComponent {
  hidePrev = true;

  workExp: Array<WorkExperience> = [
    {
      "position": "Senior Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [
        "Designed and implemented a WCAG-compliant profile page, leveraging Angular Material for better UI components",
        "Spearheaded the technical upgrade roadmap for migrating a legacy AngularJS Hybrid app to Angular 14, improving performance, security and scalability.",
        "Led the modernization and maintenance of critical microservices using .NET Core and JWT authentication, streamlining integration with internal services for consumer identity management.",
        "Streamlined the release process by designing a YAML pipeline for Azure DevOps and AKS, automating deployments.",
        "Developed document processing workflows using Azure Document Intelligence, reducing manual workload. "
      ],
      "from": "April 2023",
      "to": "Present"
    },
    {
      "position": "Lead Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [
        "Led a project to create dynamic forms in Angular using Reactive Forms, enabling configurable form fields and validation based on client-specific requirements. The form data enables quoting system to specialize quotes.",
        "Upgraded the app's routing from legacy AngularJS to state-based routing using UI-Router, modernizing navigation and performance."
      ],
      "from": "April 2022",
      "to": "March 2023"
    },
    {
      "position": "Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [
        "Contributed to migrating a legacy AngularJS application to a hybrid AngularJS-Angular app, converting essential services and components. Used Webpack and Babel loader to build AngularJS.",
        "Enhanced a critical workflow system by enabling parallel workflows for eligibility-based benefits changes, using a priority-based rule system for timely benefit enrollment.",
        "Updated the localization system using IndexedDB to improve support for dynamic, multilingual content delivery."
      ],
      "from": "August 2019",
      "to": "March 2022"
    },
  ];

  prevWorkExp: Array<WorkExperience> = [
    {
      "position": "Systems Engineer",
      "company": "Tata Consultancy Engineering",
      "location": "Mumbai, India",
      "detail": [
        "Lead the morning shift of application development support project for one of the leading bank in Europe",
        "Wrote multiple scripts and modules for HP Tandem Nonstop for smooth data processing and report generation"
      ],
      "from": "June 2017",
      "to": "August 2017"
    },
    {
      "position": "Assistant Systems Engineer",
      "company": "Tata Consultancy Engineering",
      "location": "Mumbai, India",
      "detail": [
        "Contributed to application support for Banking applications",
        "Worked on technical upgrade project for an HP Nonstop banking application. Designed processes and developed scripts for smooth and successful applcation migration"
      ],
      "from": "June 2015",
      "to": "May 2017"
    }
  ]

  constructor() {
    const isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    if (isMobile) {
      let olderExp = this.workExp.slice(1);
      this.workExp.length = 1;
      olderExp.push(...this.prevWorkExp);
      this.prevWorkExp = olderExp;
    }
  }

  openPrevWork(prevExpEl: HTMLElement) {
    this.hidePrev = !this.hidePrev;
    setTimeout(()=> prevExpEl.scrollIntoView(), 10);
  }
}
