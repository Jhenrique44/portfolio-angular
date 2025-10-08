import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: 'Resort',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      links: [
        {
          name: 'Resort',
          url: 'https://www.linkedin.com/in/jhenriquefq',
        },
      ],
    },
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
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, { 
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
