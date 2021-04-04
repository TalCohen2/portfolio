import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './content/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './content/about/about.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ContactComponent } from './content/contact/contact.component'
import { UrlService } from './services/url.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
