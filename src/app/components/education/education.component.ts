import { Component, OnInit } from '@angular/core';
import {EducationCourse} from 'src/app/models/EducationCourse';
import {EDUCATIONS} from 'src/app/repos/education-repo';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationCourses: EducationCourse[] = EDUCATIONS;

  showEdit: boolean = false;

  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }


}
