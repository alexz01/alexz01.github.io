import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, EventType, Router } from '@angular/router';

@Component({
  selector: 'r-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  navCollapsed = true;
  currentAnchor: string | null = null;
  constructor(private activedRoute: ActivatedRoute, private router: Router) {
    router.events.subscribe(e => {
      if (e.type == EventType.Scroll) {
        console.log(e.anchor);
        this.currentAnchor = e.anchor;
      }
    });
  }
}
