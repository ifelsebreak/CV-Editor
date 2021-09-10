import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  
  dateDisabled: boolean = false;
  unformattedEnd: Date = new Date();

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

  addNewItem(values: Object) {
    var newItemInstance = new ExperienceItem(values);

    this.unformattedEnd = new Date(newItemInstance.endDate)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.unformattedEnd)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.unformattedEnd)
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(this.unformattedEnd)
    da = this.ordinal_suffix_of(Number(da));
  
    newItemInstance.endDate = `${mo} ${da} ${ye}`;
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
