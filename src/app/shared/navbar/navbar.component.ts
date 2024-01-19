import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private currentTheme: string = 'dark';

  constructor(private themeService: ThemeService) {}

  public onLogoClick(): void {
    scrollTo({ top: 0, behavior: 'smooth' });
  }

  public onThemeSelect(event: any): void {
    console.log('Change detected in Navbar Select')
    const chosenTheme = (event.target.value as string).toLowerCase();
    localStorage.setItem('theme', chosenTheme);
    this.currentTheme = chosenTheme;
    this.changeTheme();
  }

  private changeTheme() {
    const allElements = Array.from(document.querySelectorAll('*'));
    allElements.forEach((el) => {
      el.classList.remove(...this.themeService.getThemes());
      el.classList.add(this.currentTheme);
    });
  }

  public getTheme(): string {
    return this.currentTheme
  }
}
