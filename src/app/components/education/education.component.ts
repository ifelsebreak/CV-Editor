import { Component, OnInit } from '@angular/core';
import {EducationCourse} from 'src/app/models/EducationCourse';
import {EDUCATIONS} from 'src/app/repos/mock-educations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationCourses: EducationCourse[] = EDUCATIONS;

  constructor() { }

  ngOnInit(): void {
  }


}
