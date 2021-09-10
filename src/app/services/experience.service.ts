import { Injectable } from '@angular/core';
import { ExperienceItem } from '../models/ExperienceItem';
import { EXPERIENCES } from '../repos/experience-repo';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): ExperienceItem[] {
    return EXPERIENCES;
  }

  addExperience(newItem: ExperienceItem): void {
    EXPERIENCES.unshift(newItem);
  }
}
