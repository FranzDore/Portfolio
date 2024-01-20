import { Injectable } from '@angular/core';
import { projects } from '../../assets/projects';
import { Project } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  public getProjects(): Project[] {
    return projects;
  }
}
