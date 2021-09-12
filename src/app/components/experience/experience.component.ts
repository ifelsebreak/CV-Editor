import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from '../../models/ExperienceItem';
import { ExperienceService } from '../../services/experience.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  experiences: ExperienceItem[] = [];
  showEdit: boolean = false;
  showAdd: boolean = false;
  showForm: boolean = false;
  showIndividualEdit: boolean = false;
  showIndividualForm: boolean = false;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(private _experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this._experienceService.getExperiences();
    console.log(this.experiences);
  }

  toggleEditMode() {
    if (this.showAdd || this.showForm) {
      this.showAdd = false;
      this.showEdit = false;
      this.showForm = false;
      this.showIndividualEdit = false;
      this.showIndividualForm = false;
    } else {
      this.showAdd = true;
      this.showIndividualEdit = true;
    }
  };

  showExperienceForm() {
    this.showAdd = !this.showAdd;
    this.showForm = !this.showForm;
  }

  addItem(newItem: ExperienceItem) {
    console.log('New experience added');
    this._experienceService.addExperience(newItem);
    this.toggleEditMode();
  }

  deleteItem(clickedElementIndex: number) {
    console.log(`Deleting experience item ${clickedElementIndex}`);
    //const unwantedItemIndex = (<HTMLElement>(<HTMLElement>(<HTMLElement>((<HTMLElement>event.target).parentElement)?.parentElement)?.parentElement)?.parentElement).id;
    //console.log(Number(unwantedItemIndex));
    this._experienceService.deleteExperience(clickedElementIndex);
  }

}
