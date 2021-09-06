import { Component, OnInit, Input } from '@angular/core';
import { EducationCourse } from 'src/app/models/EducationCourse';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() course: EducationCourse = {name: '', institute: '', startDate: '', endDate: '', completed: true};

  constructor() { }

  ngOnInit(): void {
  }

}
