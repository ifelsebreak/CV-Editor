import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ExperienceItem } from 'src/app/models/ExperienceItem';
import { ExperienceService } from '../../services/experience.service';
import { faEdit, faTrashAlt, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})

export class ExperienceItemComponent implements OnInit {
  @Input() experienceItem: ExperienceItem = {name: '', company: '', location: '', startDate: '', endDate: '', description: '', ongoing: false};
  @Input() showIndividualEdit: boolean = false;
  @Input() showIndividualForm: boolean = false;

  @Output() deleteItemEvent = new EventEmitter<number>();
  // @Output() experienceID = this.experienceItem.id;


  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  
  constructor(private _experienceService: ExperienceService) { }

  ngOnInit(): void {
    console.log(this);
  }

  toggleIndividualEditMode() {
    if (this.showIndividualForm) {
      this.showIndividualEdit = false;
      this.showIndividualForm = false;
    } else {
      this.showIndividualForm = true;
    }
  };

  deleteItem(clickedElement: ExperienceItemComponent) {
    console.log(`Clicked item ${clickedElement.experienceItem.id}`);
    //let unwantedItemIndex = (<HTMLElement>(<HTMLElement>(<HTMLElement>((<HTMLElement>event.target).parentNode)?.parentNode)?.parentNode)?.parentNode).id;
    //console.log(unwantedItemIndex);
    this.deleteItemEvent.emit(clickedElement.experienceItem.id);
  }

}
