import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: 'personalDetails', component: AboutMeComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutMeComponent,
  SkillsComponent,
  HomeComponent,
  ExperienceComponent,
  ProjectsComponent,
  ContactComponent,
  EducationComponent
]
