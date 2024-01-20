import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { Project } from './models/models';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    WelcomeComponent,
    ProjectCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  public projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
    console.log(this.projects)
  }
}
