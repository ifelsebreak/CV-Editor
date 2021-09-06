import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExperienceItem } from '../models/ExperienceItem';
import { EXPERIENCES } from '../repos/mock-experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Observable<ExperienceItem[]> {
    const experiences =  of(EXPERIENCES);
    return experiences;
  }
}
