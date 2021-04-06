import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SkillsComponent } from './content/skills/skills.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'contact', component:ContactComponent},
  {path:'**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
