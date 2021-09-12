import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import { ExperienceItem } from 'src/app/models/ExperienceItem';
import { ExperienceItemComponent } from '../../experience-item/experience-item.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
}
)
export class FormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<ExperienceItem>();
  @Input() text: string = '';
  
  dateDisabled: boolean = false;
  unformattedEnd: Date = new Date();
  unformattedStart: Date = new Date();

  constructor() { }

  ordinal_suffix_of(i: number) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

  formatDate(date: Date) {
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date)
    da = this.ordinal_suffix_of(Number(da)).toLocaleString();
    return `${mo} ${da} ${ye}`;
  }

  addNewItem(values: Object) {
    var newItemInstance = new ExperienceItem(values);

    this.unformattedStart = new Date(newItemInstance.startDate);
    newItemInstance.startDate = this.formatDate(this.unformattedStart);

    if (!newItemInstance.ongoing) {
      this.unformattedEnd = new Date(newItemInstance.endDate);
      newItemInstance.endDate = this.formatDate(this.unformattedEnd);
    }
 
    console.log(newItemInstance);
    this.newItemEvent.emit(newItemInstance);
  }

  checkValue(event: any){
    console.log(event);
    this.dateDisabled = event.target.checked;
 }

  ngOnInit(): void {
  }

}
