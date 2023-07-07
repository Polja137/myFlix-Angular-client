import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

    /**
   * navigate to movies.
  */
  toMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * navigate to profile.
  */
  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * logout and navigate to welcome page.
  */
  logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}
