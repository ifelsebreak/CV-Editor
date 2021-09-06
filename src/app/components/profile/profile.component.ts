import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { PROFILE } from 'src/app/repos/profile-repo';
import { faMapMarkerAlt, faPhoneAlt, faCalendarAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile = PROFILE;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faCalendarAlt = faCalendarAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
