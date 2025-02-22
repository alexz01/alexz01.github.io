import { ThemeService } from './../../core/theme.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'r-navigator',
  standalone: true,
  imports: [
    NgbCollapse,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent {
  @Input() navUrls: NavUrl[] = [];

  navCollapsed = true;
  currentAnchor: string | null = null;
  darkModeOn$ = this.themeService.darkModeEnabled$;

  constructor(private router: Router,
    private themeService: ThemeService
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

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}

export type NavUrl = {
  anchor: string
  title: string
}