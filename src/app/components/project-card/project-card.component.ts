import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;

  ngOnInit(): void {
      console.log("PROJECT CARD: ", this.project);
  }
}
