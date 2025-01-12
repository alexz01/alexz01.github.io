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
        "Lead individual contributor for Benefits Access consumer and admin web portal serving over 200,000 users monthly.",
        "Led and mentored a distributed agile team of 4 developers, resulting in 20% improvement in sprint completion rate and enhanced collaboration across multiple time zones.",
        "Spearheaded feature development of option-based benefit selection using Angular - Typescript, C# .Net core, and SQL, providing a new way to enroll in single use benefits along with yearly health benefits.",
        "Led the modernization and maintenance of benefits web app and critical RESTful microservices using Angular 16, .NET Core 8 and OAuth 2 authentication, reducing response time by 15%.",
        "Streamlined the code release process by designing a CI/CD YAML pipeline in Azure DevOps, automating deployments and reducing deployment time by 30%.",
        "Developed document processing workflows using Azure Document Intelligence, reducing manual workload."
      ],
      "from": "April 2023",
      "to": "Present"
    },
    {
      "position": "Lead Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [
        "Managed the development of dynamic customer info feature using Angular Reactive Forms, ASP.NET MVC and Entity Framework for Admin app, enabling custom consumer information input and improved benefit quote alignment.",
        "Implemented state-based routing using UI-Router in Angular app, resulting in significantly improved navigation speeds and enhanced user experience."
      ],
      "from": "April 2022",
      "to": "March 2023"
    },
    {
      "position": "Software Engineer",
      "company": "Willis Towers Watson",
      "location": "Buffalo, NY",
      "detail": [
        "Contributed to migrating a monolithic web application to a hybrid AngularJS app and .Net microservices, converting essential services to modern standards, and enabling better maintainable code.",
        "Enhanced a benefits selection workflow system by enabling parallel workflows, reducing processing time for eligibility changes by 25%.",
        "Upgraded the localization system with AngularJS component and Indexed DB, which improved support for dynamic, multilingual content delivery and reduced page load time by 15%."
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
        "Wrote multiple scripts and modules for HP Tandem Nonstop for smooth data processing and report generation",
        "Contributed to application support for Banking applications",
        "Worked on technical upgrade project for an HP Nonstop banking application. Designed processes and developed scripts for smooth and successful applcation migration"
      ],
      "from": "June 2017",
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
