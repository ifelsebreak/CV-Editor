import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from '../../models/ExperienceItem';
import { ExperienceService } from '../../services/experience.service';
import { EXPERIENCES } from '../../repos/mock-experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceItem[] = EXPERIENCES;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe((experiences) => (this.experiences= experiences));
  }

}
