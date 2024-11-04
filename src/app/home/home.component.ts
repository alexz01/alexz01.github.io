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
