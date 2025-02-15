import { Component } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'r-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgbCollapse,
    IntroductionComponent,
    WorkExpComponent,
    EducationComponent,
    ContactComponent
  ]
})
export class HomeComponent {
  navCollapsed = true;
  currentAnchor: string | null = null;
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
