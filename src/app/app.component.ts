import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'r-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.themeService.darkModeEnabled$
      .subscribe(enabled => {
        if (enabled) {
          this.document.querySelector('html')?.setAttribute('data-bs-theme', 'dark');
        }
        else{
          this.document.querySelector('html')?.removeAttribute('data-bs-theme');
        }
      })
  }
}
