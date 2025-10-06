import { Component } from '@angular/core';

//Components
import { HeaderComponent } from '../../components/header/header';
import { KnowledgeComponent } from '../../components/knowledge/knowledge';
import { ExperiencesComponent } from '../../components/experiences/experiences';
import { ProjectsComponent } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
