import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceService } from './services/experience.service';
import { FormComponent } from './components/utilities/form/form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EducationComponent,
    EducationItemComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    ProfileComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
