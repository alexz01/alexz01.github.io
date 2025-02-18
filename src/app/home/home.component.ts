import { Component } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { NavigatorComponent, NavUrl } from '../shared/navigator/navigator.component';

@Component({
  selector: 'r-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgbCollapse,
    IntroductionComponent,
    WorkExpComponent,
    EducationComponent,
    ContactComponent,
    NavigatorComponent
  ]
})
export class HomeComponent {
  navCollapsed = true;
  currentAnchor: string | null = null;
  navUrls: NavUrl[] = [
    {anchor:'about', title: 'About me'},
    {anchor:'work-experience', title: 'Work XP'},
    {anchor:'education', title: 'Education'},
    {anchor:'contact', title: 'Contact'},
  ];

  constructor(private router: Router,
  ) {
    router.events.subscribe(e => {
      if (e.type == EventType.Scroll) {
        this.currentAnchor = e.anchor;
      }
    });

  }

  closeNavTimed() {
    window.setTimeout(() => this.navCollapsed = true, 1000);
  }
}
