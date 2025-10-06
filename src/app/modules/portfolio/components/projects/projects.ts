import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.components';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
  ]);
}
